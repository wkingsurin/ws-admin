"use server";

import { prisma } from "@/lib/prisma";
import { supabaseStorage } from "@/lib/supabase-storage";
import { revalidatePath } from "next/cache";
import generateSKU from "./actions/generate-sku";

interface CreateVariantInput {
  size: string;
  price: string;
  oldPrice: string;
  stock: string;
  isActive: boolean;
}

interface CreateColorInput {
  clientKey: string;
  colorId?: string;
  name: string;
  variants: CreateVariantInput[];
}

interface UploadedImage {
  colorKey: string;
  url: string;
  path: string;
}

interface CreateProductColorVariantsInput {
  productId: string;
  colors: CreateColorInput[];
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const BUCKET = "product-images";
const MAX_FILE_SIZE = 5 * 1024 * 1024;

const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);

const extenstionByType: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

function validateVariant(variant: CreateVariantInput) {
  const size = variant.size.trim();
  const price = Number(variant.price);
  const oldPrice = variant.size.trim() === "" ? null : Number(variant.oldPrice);
  const stock = Number(variant.stock);

  if (!size) {
    throw new Error("Укажи размер варианта");
  }

  if (
    variant.price.trim() === "" ||
    !Number.isSafeInteger(price) ||
    price < 0
  ) {
    throw new Error(`Некорректная цена для размера ${size}`);
  }

  if (oldPrice !== null && (!Number.isSafeInteger(oldPrice) || oldPrice < 0)) {
    throw new Error(`Некорректная старая цена для размера ${size}`);
  }

  if (
    variant.stock.trim() === "" ||
    !Number.isSafeInteger(stock) ||
    stock < 0
  ) {
    throw new Error(`Некорретный остаток для размера ${size}`);
  }

  if (typeof variant.isActive !== "boolean") {
    throw new Error(`Некорректный статус размера ${size}`);
  }

  return { size, price, oldPrice, stock };
}

function validateImage(file: File) {
  if (!allowedTypes.has(file.type)) {
    throw new Error(
      `Файл "${file.name}": поддерживаются только JPEG, PNG, WEBP`,
    );
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error(`Файл "${file.name}": размер не должен первышать 5 MB`);
  }

  if (file.size === 0) {
    throw new Error(`Файл "${file.name}": пустой`);
  }
}

async function uploadImage(file: File): Promise<{ url: string; path: string }> {
  validateImage(file);

  const path = `${crypto.randomUUID()}.${extenstionByType[file.type]}`;

  const { error } = await supabaseStorage.storage
    .from(BUCKET)
    .upload(path, await file.arrayBuffer(), {
      contentType: file.type,
      upsert: false,
    });

  if (error) {
    console.error(`Supabase image upload error:`, error.message);
    throw new Error(`Не удалось загрузить файл "${file.name}"`);
  }

  const { data } = supabaseStorage.storage.from(BUCKET).getPublicUrl(path);

  return { url: data.publicUrl, path };
}

async function removeUploadedImages(paths: string[]) {
  if (!paths.length) return;

  const { error } = await supabaseStorage.storage.from(BUCKET).remove(paths);

  if (error) {
    console.error("Supabase image cleanup error:", error.message);
  }
}

export async function createProductColorVariants(formData: FormData) {
  const payloadValue = formData.get("payload");

  if (typeof payloadValue !== "string") {
    throw new Error("Не переданы данные товара");
  }

  let input: CreateProductColorVariantsInput;

  try {
    input = JSON.parse(payloadValue);
  } catch {
    throw new Error("Некорректные данные товара");
  }

  const { productId, colors } = input;

  if (!productId) {
    throw new Error(`Не указан товар`);
  }

  if (!Array.isArray(colors) || !colors.length) {
    throw new Error("Добавь хотя бы один цвет");
  }

  for (const color of colors) {
    if (!color.name?.trim()) {
      throw new Error(`Укажи название цвета`);
    }

    if (!color.clientKey) {
      throw new Error(`Не указан идентификатор цвета`);
    }

    if (!Array.isArray(color.variants) || !color.variants.length) {
      throw new Error(`Добав хотя ды один размер для цвета "${color.name}"`);
    }

    const sizes = new Set<string>();

    for (const variant of color.variants) {
      const normalizedSize = variant.size.trim().toLowerCase();

      if (sizes.has(normalizedSize)) {
        throw new Error(
          `Размер "${variant.size}" повторяется у цвета "${color.name}"`,
        );
      }

      sizes.add(normalizedSize);
      validateVariant(variant);
    }
  }

  const imagesByColor = new Map<string, File[]>();

  for (const color of colors) {
    const files = formData
      .getAll(`images:${color.clientKey}`)
      .filter((value): value is File => value instanceof File);

    imagesByColor.set(color.clientKey, files);
  }

  const uploadedImages: UploadedImage[] = [];

  try {
    for (const color of colors) {
      if (color.colorId && (imagesByColor.get(color.clientKey)?.length ?? 0)) {
        throw new Error(
          `Нельзя добавлять изображения существующему цвету "${color.name}"`,
        );
      }

      for (const file of imagesByColor.get(color.clientKey) ?? []) {
        const uploaded = await uploadImage(file);

        uploadedImages.push({ colorKey: color.clientKey, ...uploaded });
      }
    }

    const result = await prisma.$transaction(async (tx) => {
      const product = await tx.product.findUnique({
        where: { id: productId },
        include: {
          brand: true,
          category: true,
          productColors: {
            select: { id: true, name: true },
          },
        },
      });

      if (!product) {
        throw new Error(`Товар не найден`);
      }

      const createdVariants = [];

      for (const colorInput of colors) {
        const normalizedName = colorInput.name.trim();

        let color: { id: string; slug: string };

        if (colorInput.colorId) {
          const existingColor = await tx.productColor.findFirst({
            where: {
              id: colorInput.colorId,
              productId,
            },
            select: { id: true, slug: true },
          });

          if (!existingColor) {
            throw new Error(
              `Цвет "${normalizedName}" не найден у этого товара`,
            );
          }

          color = existingColor;
        } else {
          const duplicateColor = await tx.productColor.findFirst({
            where: {
              productId,
              name: { equals: normalizedName, mode: "insensitive" },
            },
            select: { id: true },
          });

          if (duplicateColor) {
            throw new Error(
              `Цвет "${normalizedName}" уже существует у этого товара`,
            );
          }

          const slug = slugify(normalizedName);

          if (!slug) {
            throw new Error(
              `не удалось сформировать slug для цвета "${normalizedName}"`,
            );
          }

          color = await tx.productColor.create({
            data: {
              productId,
              name: normalizedName,
              slug,
            },
            select: { id: true, slug: true },
          });
        }

        const existingVaraints = await tx.variant.findMany({
          where: { colorId: color.id },
          select: { size: true },
        });

        const existingSizes = new Set(
          existingVaraints.map((variant) => variant.size.trim().toLowerCase()),
        );

        for (const vairantInput of colorInput.variants) {
          const normalizedSize = vairantInput.size.trim();
          const sizeKey = normalizedSize.toLowerCase();

          if (existingSizes.has(sizeKey)) {
            throw new Error(
              `Размер "${normalizedSize}" уже существует у цвета "${normalizedName}"`,
            );
          }

          existingSizes.add(sizeKey);

          const { size, price, oldPrice, stock } =
            validateVariant(vairantInput);

          const baseSKU = generateSKU({
            brand: product.brand,
            category: product.category,
            productName: product.title,
            color: { name: normalizedName },
            size,
          });

          let sku = baseSKU;
          let suffix = 2;

          while (
            await tx.variant.findUnique({
              where: { sku },
              select: { id: true },
            })
          ) {
            sku = `${baseSKU}-${suffix}`;
            suffix += 1;
          }

          const variant = await tx.variant.create({
            data: {
              productId,
              colorId: color.id,
              sku,
              size,
              price,
              oldPrice,
              stock,
              isActive: vairantInput.isActive,
            },
          });

          createdVariants.push(variant);
        }

        const colorImages = uploadedImages.filter(
          (image) => image.colorKey === colorInput.clientKey,
        );

        for (const image of colorImages) {
          await tx.productImage.create({
            data: {
              colorId: color.id,
              src: image.url,
            },
          });
        }
      }

      return createdVariants;
    });

    revalidatePath(`/catalog/${productId}`);

    return result;
  } catch (error) {
    await removeUploadedImages(uploadedImages.map((image) => image.path));

    throw error;
  }
}

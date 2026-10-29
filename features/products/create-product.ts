"use server";

import { prisma } from "@/lib/prisma";
import generateSKU from "./actions/generate-sku";
import { revalidatePath } from "next/cache";

interface CreateProductVariantInput {
  size: string;
  price: string;
  oldPrice: string;
  stock: string;
  isActive: boolean;
}

interface CreateProductColorInput {
  name: string;
  variants: CreateProductVariantInput[];
  images: string[];
}

interface CreateProductInput {
  title: string;
  description: string;
  brandId: string;
  categoryId: string;
  currency: string;
  isAvailable: boolean;
  isNew: boolean;
  colors: CreateProductColorInput[];
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function createProduct(input: CreateProductInput) {
  const { title, description, brandId, categoryId } = input;

  if (!title || !description || !brandId || !categoryId) {
    throw new Error("Заполни название, описание, бренд и категорию товара");
  }

  if (input.colors.length === 0) {
    throw new Error("Добавь хотя-бы один цвет");
  }

  const colorNames = input.colors.map((color) =>
    color.name.trim().toLowerCase(),
  );

  if (colorNames.some((name) => !name)) {
    throw new Error("Название цвета не может быть пустым");
  }

  if (new Set(colorNames).size !== colorNames.length) {
    throw new Error("Названия цветов не должны повторяться");
  }

  const colors = input.colors.map((color) => ({
    name: color.name,
    slug: slugify(color.name),
    variants: color.variants.map((variant) => {
      const price = Number(variant.price);
      const oldPrice =
        variant.oldPrice.trim() === "" ? null : Number(variant.oldPrice);
      const stock = Number(variant.stock);

      if (
        !variant.size.trim() ||
        !Number.isInteger(price) ||
        price < 0 ||
        (oldPrice !== null && (!Number.isInteger(oldPrice) || oldPrice < 0)) ||
        !Number.isInteger(stock) ||
        stock < 0
      ) {
        throw new Error(`Проверь цену, остаток и размер варианта`);
      }

      return {
        size: variant.size.trim(),
        price,
        oldPrice,
        stock,
        isActive: variant.isActive,
      };
    }),
    images: color.images,
  }));

  for (const color of colors) {
    const sizes = color.variants.map((variant) => variant.size);

    if (new Set(sizes).size !== sizes.length) {
      throw new Error(`Размеры цвета "${color.name}" повторяются`);
    }
  }

  const hasAvailableVariant = colors.some((color) =>
    color.variants.some((variant) => variant.isActive && variant.stock > 0),
  );

  if (input.isAvailable && !hasAvailableVariant) {
    throw new Error(
      "Что-бы сделать товар доступным, добавь активный вариант с остатком больше нуля",
    );
  }

  const baseSlug = slugify(title);

  if (!baseSlug) {
    throw new Error("Не удалось сформировать slug из названия товара");
  }

  const productSlug = `${baseSlug}-${crypto.randomUUID().slice(0, 8)}`;

  return prisma.$transaction(async (tx) => {
    const [brand, category] = await Promise.all([
      tx.brand.findUnique({ where: { id: input.brandId } }),
      tx.category.findUnique({ where: { id: input.categoryId } }),
    ]);

    if (!brand) {
      throw new Error("Выбранный бренд не найден");
    }

    if (!category) {
      throw new Error("Выбранная категория не найдена");
    }

    const { id: productId } = await tx.product.create({
      data: {
        title,
        slug: productSlug,
        description,
        currency: input.currency,
        isAvailable: input.isAvailable,
        isNew: input.isNew,
        brandId: brand.id,
        categoryId: category.id,
      },
    });

    for (const color of colors) {
      const { id: colorId } = await tx.productColor.create({
        data: {
          productId,
          name: color.name,
          slug: color.slug,
        },
      });

      if (color.images.length > 0) {
        await tx.productImage.createMany({
          data: color.images.map((src) => ({
            colorId,
            src,
          })),
        });
      }

      for (const variant of color.variants) {
        const baseSKU = generateSKU({
          brand,
          category,
          productName: title,
          color: { name: color.name },
          size: variant.size,
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

        await tx.variant.create({
          data: {
            productId,
            colorId,
            sku,
            size: variant.size,
            price: variant.price,
            oldPrice: variant.oldPrice,
            stock: variant.stock,
            isActive: variant.isActive,
          },
        });
      }
    }

    revalidatePath("/catalog");

    return { id: productId, slug: productSlug };
  });
}

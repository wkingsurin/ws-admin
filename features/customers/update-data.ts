"use server";

import { prisma } from "@/lib/prisma";
import { DeliveryMethod, PaymentMethod } from "@/prisma/generated/prisma/enums";
import { validateCartItem } from "./validate-cart-item";
import { runSerializableTransaction } from "@/lib/prisma-transaction";
import { ValidateProductAvailability } from "../products/validate-product-availability";
import { syncProductAvailability } from "../products/sync-product-availability";
import { revalidatePath } from "next/cache";
import { ActionResult } from "../shared/action-result";
import { getUpdateMessage } from "../shared/get-update-message";

export type UpdateDataParams =
  | {
      entity: "USER";
      id: string;
      data: {
        name?: string;
        email?: string;
        address?: {
          recipient?: string;
          country?: string;
          city?: string;
          street?: string;
          postalCode?: string;
          phone?: string;
        };
      };
    }
  | {
      entity: "ORDER";
      id: string;
      data: {
        customerEmail?: string;
        shippingAddress?: string;
        shippingCity?: string;
        shippingCountry?: string;
        shippingPostalCode?: string;
        deliveryMethod?: DeliveryMethod;
        paymentMethod?: PaymentMethod;
        isPaid?: boolean;
      };
    }
  | {
      entity: "PRODUCT";
      id: string;
      data: {
        title?: string;
        description?: string;
        isAvailable?: boolean;
        isNew?: boolean;
      };
    }
  | {
      entity: "VARIANT";
      id: string;
      data: {
        price?: number;
        oldPrice?: number | null;
        stock?: number;
      };
    }
  | {
      entity: "CART_ITEM";
      id: string;
      data: {
        quantity?: number;
        selectedSize?: string;
        selectedColor?: string;
      };
    };

export async function updateData({
  entity,
  id,
  data,
}: UpdateDataParams): Promise<ActionResult> {
  try {
    switch (entity) {
      case "USER": {
        const { address, ...userData } = data;

        const successMessage = getUpdateMessage({ entity, id, data });

        await prisma.user.update({
          where: {
            id,
          },

          data: {
            ...userData,

            ...(address && {
              address: {
                upsert: {
                  update: address,

                  create: {
                    id: crypto.randomUUID(),
                    updatedAt: new Date(),
                    ...address,
                  },
                },
              },
            }),
          },
        });

        revalidatePath(`/customers/`);
        revalidatePath(`/customers/${id}`);

        return { success: true, message: successMessage };
      }

      case "ORDER": {
        await prisma.order.update({
          where: { id },
          data,
        });

        const successMessage = getUpdateMessage({ entity, id, data });

        revalidatePath(`/orders/`);
        revalidatePath(`/orders/${id}`);

        return {
          success: true,
          message: successMessage,
        };
      }

      case "PRODUCT": {
        const { isAvailable, ...productData } = data;

        await runSerializableTransaction(async (tx) => {
          if (isAvailable) {
            await ValidateProductAvailability({
              tx,
              productId: id,
              isAvailable,
            });
          }

          await tx.product.update({
            where: { id },
            data: {
              ...productData,
              ...(isAvailable !== undefined && { isAvailable }),
            },
          });
        });

        const successMessage = getUpdateMessage({ entity, id, data });

        revalidatePath("/catalog");
        revalidatePath(`/catalog/${id}`);

        return {
          success: true,
          message: successMessage,
        };
      }

      case "VARIANT": {
        const { price, oldPrice, stock } = data;

        await runSerializableTransaction(async (tx) => {
          if (price !== undefined && (!Number.isInteger(price) || price < 0)) {
            throw new Error("Цена должна быть целым числом не меньше нуля");
          }

          if (
            oldPrice !== undefined &&
            oldPrice !== null &&
            (!Number.isInteger(oldPrice) || oldPrice < 0)
          ) {
            throw new Error(
              "Старая цена должны быть null или целым числом не меньше нуля",
            );
          }

          if (stock !== undefined && (!Number.isInteger(stock) || stock < 0)) {
            throw new Error("Остаток должен быть целым числом не меньше нуля");
          }

          const variant = await tx.variant.findUnique({
            where: { id },
            select: {
              id: true,
              productId: true,
            },
          });

          if (!variant) {
            throw new Error("Вариант товара не найден");
          }

          if (stock !== undefined) {
            const excessiveCartItem = await tx.cartItem.findFirst({
              where: { variantId: id, quantity: { gt: stock } },
              select: { quantity: true },
            });

            if (excessiveCartItem) {
              throw new Error(
                `Нельзя установить остаток ${stock}: в корзине есть количество ${excessiveCartItem.quantity}`,
              );
            }

            const updateVariant = await tx.variant.update({
              where: { id },
              data: {
                ...(price !== undefined && { price }),
                ...(oldPrice !== undefined && { oldPrice }),
                ...(stock !== undefined && { stock }),
              },
            });

            await syncProductAvailability({ tx, productId: variant.productId });

            return updateVariant;
          }

          await tx.variant.update({
            where: { id },
            data,
          });
        });

        const successMessage = getUpdateMessage({ entity, id, data });

        revalidatePath("/catalog");

        return { success: true, message: successMessage };
      }

      case "CART_ITEM": {
        const { quantity, selectedSize, selectedColor } = data;

        await runSerializableTransaction(async (tx) => {
          const cartItem = await tx.cartItem.findUnique({
            where: { id },
            include: {
              variant: {
                include: { color: true },
              },
            },
          });

          if (!cartItem) {
            throw new Error("Элемент корзины не найден");
          }

          let variantId = cartItem.variantId;

          if (selectedSize !== undefined || selectedColor !== undefined) {
            const size = selectedSize ?? cartItem.variant.size;
            const colorName = selectedColor ?? cartItem.variant.color.name;

            const variant = await tx.variant.findFirst({
              where: {
                productId: cartItem.variant.productId,
                size,
                color: {
                  is: {
                    productId: cartItem.variant.productId,
                    name: colorName,
                  },
                },
              },
              select: { id: true },
            });

            if (!variant) {
              throw new Error(
                `Вариант не найден: цвет ${colorName}, размер ${size}`,
              );
            }

            variantId = variant.id;
          }

          const nextQuantity = quantity ?? cartItem.quantity;

          await validateCartItem({ tx, variantId, quantity: nextQuantity });

          await tx.cartItem.update({
            where: { id },
            data: { variantId, quantity: nextQuantity },
          });
        });

        const successMessage = getUpdateMessage({ entity, id, data });

        revalidatePath("/customers");

        return { success: true, message: successMessage };
      }

      default:
        return { success: false, message: `Unsupported entity: ${entity}` };
    }
  } catch (error) {
    if (
      entity === "USER" &&
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "P2002"
    ) {
      return {
        success: false,
        message: "Пользователь с таким email уже существует",
      };
    }

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Произошла ошибка при обновлении данных",
    };
  }
}

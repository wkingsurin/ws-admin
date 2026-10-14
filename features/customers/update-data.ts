"use server";

import { prisma } from "@/lib/prisma";
import { DeliveryMethod, PaymentMethod } from "@/prisma/generated/prisma/enums";
import { validateCartItem } from "./validate-cart-item";
import { runSerializableTransaction } from "@/lib/prisma-transaction";
import { ValidateProductAvailability } from "../products/validate-product-availability";
import { syncProductAvailability } from "../products/sync-product-availability";

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
        size?: string;
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

export async function updateData({ entity, id, data }: UpdateDataParams) {
  switch (entity) {
    case "USER": {
      const { address, ...userData } = data;

      return prisma.user.update({
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
    }

    case "ORDER": {
      return prisma.order.update({
        where: { id },
        data,
      });
    }

    case "PRODUCT": {
      const { isAvailable, ...productData } = data;

      return runSerializableTransaction(async (tx) => {
        if (isAvailable) {
          await ValidateProductAvailability({ tx, productId: id, isAvailable });
        }

        return tx.product.update({
          where: { id },
          data: {
            ...productData,
            ...(isAvailable !== undefined && { isAvailable }),
          },
        });
      });
    }

    case "VARIANT": {
      const { price, oldPrice, stock, size } = data;

      return runSerializableTransaction(async (tx) => {
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
              ...(size !== undefined && { size }),
            },
          });

          await syncProductAvailability({ tx, productId: variant.productId });

          return updateVariant;
        }

        return tx.variant.update({
          where: { id },
          data,
        });
      });
    }

    case "CART_ITEM": {
      const { quantity, selectedSize, selectedColor } = data;

      return runSerializableTransaction(async (tx) => {
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
                is: { productId: cartItem.variant.productId, name: colorName },
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

        return tx.cartItem.update({
          where: { id },
          data: { variantId, quantity: nextQuantity },
        });
      });
    }

    default:
      throw new Error(`Unsupported entity: ${entity}`);
  }
}

"use server";

import { prisma } from "@/lib/prisma";

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
      };
    }
  | {
      entity: "ORDER_ITEM";
      id: string;
      data: {
        quantity?: number;
      };
    }
  | {
      entity: "PRODUCT";
      id: string;
      data: {
        title?: string;
        description?: string;
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

    case "ORDER_ITEM": {
      return prisma.orderItem.update({
        where: { id },
        data,
      });
    }

    case "PRODUCT": {
      return prisma.product.update({
        where: { id },
        data,
      });
    }

    case "VARIANT": {
      return prisma.variant.update({
        where: { id },
        data,
      });
    }

    case "CART_ITEM": {
      return prisma.cartItem.update({
        where: { id },
        data,
      });
    }

    default:
      throw new Error(`Unsupported entity: ${entity}`);
  }
}

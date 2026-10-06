import { Prisma } from "@/prisma/generated/prisma/client";

export type UserWithRelations = Prisma.UserGetPayload<{
  include: { address: true };
}>;

export type CartItemWithRelations = Prisma.CartItemGetPayload<{
  include: {
    variant: {
      include: {
        product: {
          include: {
            brand: true;
            category: true;
            productColors: { include: { images: true } };
          };
        };
        color: true;
      };
    };
  };
}>;

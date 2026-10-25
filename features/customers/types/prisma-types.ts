import { Prisma } from "@/prisma/generated/prisma/client";

export type UserWithRelations = Prisma.UserGetPayload<{
  include: { address: true };
}>;

export type FavoriteWithRelations = Prisma.FavoriteGetPayload<{
  include: {
    product: {
      select: {
        title: true;
        productColors: {
          select: { images: true };
        };
      };
    };
  };
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

export type CartItemWithAvailableOptions = Prisma.CartItemGetPayload<{
  include: {
    variant: {
      include: {
        product: {
          include: {
            brand: true;
            category: true;
            productColors: {
              include: {
                images: true;
              };
            };
            variants: {
              select: {
                size: true;
              };
            };
          };
        };
        color: true;
      };
    };
  };
}>;

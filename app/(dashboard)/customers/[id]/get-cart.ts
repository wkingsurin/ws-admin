import { prisma } from "@/lib/prisma";

export async function getCartByUserId(id: string) {
  return prisma.cart.findUnique({
    where: { userId: id },
    include: {
      items: {
        include: {
          variant: {
            include: {
              product: {
                include: {
                  brand: true,
                  category: true,
                  productColors: { include: { images: true } },
                },
              },
              color: true,
            },
          },
        },
      },
    },
  });
}

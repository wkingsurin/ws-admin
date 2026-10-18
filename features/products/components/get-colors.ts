import { prisma } from "@/lib/prisma";

export default async function getColors(productId: string) {
  return prisma.productColor.findMany({
    where: { productId },
    select: {
      id: true,
      name: true,
      variants: {
        select: {
          size: true,
          price: true,
          oldPrice: true,
          stock: true,
          isActive: true,
        },
      },
    },
  });
}

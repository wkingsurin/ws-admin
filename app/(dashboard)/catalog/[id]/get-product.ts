import { prisma } from "@/lib/prisma";

export async function getProductById(id: string) {
  return prisma.product.findUnique({
    where: { id },
    include: {
      brand: true,
      category: true,
      productColors: {
        select: {
          id: true,
          name: true,
          slug: true,
          images: {
            select: { id: true, src: true },
          },
        },
      },
      variants: {
        where: {
          isActive: true,
        },
        select: {
          id: true,
          sku: true,
          colorId: true,
          size: true,
          stock: true,
          price: true,
          oldPrice: true,
        },
      },
    },
  });
}

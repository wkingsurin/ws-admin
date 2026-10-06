import { prisma } from "@/lib/prisma";
import { ProductWithRelations } from "./types/prisma-types";

export async function getProducts(): Promise<ProductWithRelations[]> {
  return prisma.product.findMany({
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
    orderBy: { createdAt: "desc" },
  });
}

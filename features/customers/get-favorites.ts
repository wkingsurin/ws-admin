import { prisma } from "@/lib/prisma";

export async function getFavoritesByUserId(id: string) {
  return prisma.favorite.findMany({
    where: { userId: id },
    include: {
      product: {
        select: {
          title: true,
          productColors: {
            select: { images: true },
          },
        },
      },
    },
  });
}

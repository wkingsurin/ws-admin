import { prisma } from "@/lib/prisma";

export async function getFavoritesByUserId(id: string) {
  return prisma.favorite.findMany({
    where: { userId: id },
  });
}

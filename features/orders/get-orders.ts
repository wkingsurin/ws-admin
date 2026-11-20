import { prisma } from "@/lib/prisma";
import { OrderWithRelations } from "./types/prisma-types";

export async function getOrders(
  userId?: string,
): Promise<OrderWithRelations[]> {
  return prisma.order.findMany({
    where: {
      userId: userId,
    },
    include: { items: true },
    orderBy: {
      createdAt: "desc",
    },
  });
}

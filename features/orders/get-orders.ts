import { prisma } from "@/lib/prisma";
import { OrderWithRelations } from "./types/prisma-types";

export async function getOrders(): Promise<OrderWithRelations[]> {
  return prisma.order.findMany({
    include: { items: true },
    orderBy: {
      createdAt: "desc",
    },
  });
}

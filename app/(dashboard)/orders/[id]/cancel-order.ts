"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function cancelOrder(id: string) {
  const order = await prisma.order.findUnique({
    where: { id },
    select: { status: true },
  });

  if (!order) {
    throw new Error(`Заказа с [id: ${id}] не существует`);
  }

  if (order.status === "CANCELLED") {
    throw new Error(`Заказ с [id: ${id}] уже отменён`);
  }

  await prisma.order.update({ where: { id }, data: { status: "CANCELLED" } });

  revalidatePath("/orders");
  revalidatePath(`/orders/${id}`);

  return { success: true };
}

"use server";

import { ActionResult } from "@/features/shared/action-result";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type UpdateOrderDetailsData =
  | {
      customerName?: string;
      customerEmail?: string;
    }
  | {
      shippingAddress?: string;
      shippingCity?: string;
      shippingCountry?: string;
      shippingPostalCode?: string;
    };

export default async function updateOrderDetails(
  orderId: string,
  data: UpdateOrderDetailsData,
): Promise<ActionResult> {
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    select: { id: true },
  });

  if (!order) {
    return { success: false, message: "Order with this ID was not found." };
  }

  const normalizedData = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      typeof value === "string" ? value.trim() : value,
    ]),
  );

  const changedData = Object.fromEntries(
    Object.entries(normalizedData).filter(
      ([key, value]) => value !== order[key as keyof typeof order],
    ),
  );

  if (Object.keys(changedData).length === 0) {
    return {
      success: true,
      message: "Изменений нет",
    };
  }

  const isCustomerData = "customerName" in data || "customerEmail" in data;

  await prisma.order.update({ where: { id: orderId }, data });

  revalidatePath("/orders/");
  revalidatePath(`/orders/${orderId}`);

  return {
    success: true,
    message: isCustomerData
      ? "Данные покупателя обновлён!"
      : "Адрес покупателя обновлён!",
  };
}

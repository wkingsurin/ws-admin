"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function toggleProductAvailability(id: string) {
  const existingProduct = await prisma.product.findUnique({
    where: { id },
    select: { isAvailable: true },
  });

  if (!existingProduct) {
    throw new Error(`Товара ${id} не существует`);
  }

  await prisma.product.update({
    where: { id },
    data: { isAvailable: !existingProduct.isAvailable },
  });

  revalidatePath("/catalog");
  revalidatePath(`/catalog/${id}`);

  return { success: true };
}

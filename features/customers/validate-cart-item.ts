import { Prisma } from "@/prisma/generated/prisma/client";

interface ValidateCartItemParams {
  tx: Prisma.TransactionClient;
  variantId: string;
  quantity: number;
}

export async function validateCartItem({
  tx,
  variantId,
  quantity,
}: ValidateCartItemParams) {
  if (!Number.isInteger(quantity) || quantity < 1) {
    throw new Error("Количество должно быть положительным целым числом");
  }

  const variant = await tx.variant.findUnique({
    where: { id: variantId },
    select: { id: true, stock: true, isActive: true },
  });

  if (!variant) {
    throw new Error("Вариант товара не найден");
  }

  if (!variant.isActive) {
    throw new Error('Вариант товара неактивен')
  }

  if (variant.stock <= 0) {
    throw new Error("Товар отсутствует на складе");
  }

  if (quantity > variant.stock) {
    throw new Error(
      `Количество не может превышать остаток на складе: ${variant.stock}`,
    );
  }

  return variant;
}

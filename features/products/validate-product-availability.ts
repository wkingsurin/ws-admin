import { Prisma } from "@/prisma/generated/prisma/client";

interface ValidateProductAvailabilityParams {
  tx: Prisma.TransactionClient;
  productId: string;
  isAvailable: boolean;
}

export async function ValidateProductAvailability({
  tx,
  productId,
  isAvailable,
}: ValidateProductAvailabilityParams) {
  if (!isAvailable) return;

  const availableVariant = await tx.variant.findFirst({
    where: {
      productId,
      isActive: true,
      stock: {
        gt: 0,
      },
    },
    select: { id: true },
  });

  if (!availableVariant) {
    throw new Error(
      "Нельзя сделать товар доступным для продажи: нет активных вариантов в наличии",
    );
  }
}

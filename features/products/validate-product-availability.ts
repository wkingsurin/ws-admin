import { Prisma } from "@/prisma/generated/prisma/client";
import { ActionResult } from "../shared/action-result";

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
  if (!isAvailable)
    return { success: false, message: "Этот товар недоступен для изменения" };

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
    return {
      success: false,
      message:
        "Нельзя сделать товар доступным для продажи: нет активных вариантов в наличии",
    };
  }
}

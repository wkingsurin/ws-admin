import { Prisma } from "@/prisma/generated/prisma/client";

interface SyncProductAvailabilityParams {
  tx: Prisma.TransactionClient;
  productId: string;
}

export async function syncProductAvailability({
  tx,
  productId,
}: SyncProductAvailabilityParams) {
  const availableVariant = await tx.variant.findFirst({
    where: { productId, isActive: true, stock: { gt: 0 } },
  });

  if (availableVariant) return;

  await tx.product.update({
    where: { id: productId },
    data: {
      isAvailable: false,
    },
  });
}

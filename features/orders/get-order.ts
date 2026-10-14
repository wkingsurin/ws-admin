import { prisma } from "@/lib/prisma";

export async function getOrderById(id: string) {
  const order = await prisma.order.findUnique({
    where: { id },
    include: { items: true },
  });

  if (!order) return null;

  const productIds = [...new Set(order.items.map((item) => item.productId))];

  const products = await prisma.product.findMany({
    where: { id: { in: productIds } },
    select: {
      id: true,
      productColors: {
        select: { name: true },
      },
      variants: {
        select: { size: true },
      },
    },
  });

  const colorsByProductId = new Map(
    products.map((product) => [
      product.id,
      product.productColors.map((color) => ({
        label: color.name,
        value: color.name,
      })),
    ]),
  );

  const sizesByProductId = new Map(
    products.map((product) => [
      product.id,
      [...new Set(product.variants.map((variant) => variant.size))]
        .sort()
        .map((size) => ({ label: size, value: size })),
    ]),
  );

  return {
    ...order,
    items: order.items.map((item) => ({
      ...item,
      availableColors: colorsByProductId.get(item.productId) ?? [],
      availableSizes: sizesByProductId.get(item.productId) ?? [],
    })),
  };
}

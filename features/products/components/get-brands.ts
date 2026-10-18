import { prisma } from "@/lib/prisma";

export default async function getBrands() {
  return prisma.brand.findMany();
}

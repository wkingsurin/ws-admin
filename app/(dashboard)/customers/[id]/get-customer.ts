import { prisma } from "@/lib/prisma";

export async function getCustomerById(id: string) {
  return prisma.user.findUnique({
    where: { id },
    include: { address: true },
  });
}

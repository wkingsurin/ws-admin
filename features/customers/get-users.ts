import { prisma } from "@/lib/prisma";
import { UserWithRelations } from "./types/prisma-types";

export async function getUsers(): Promise<UserWithRelations[]> {
  const users = await prisma.user.findMany({
    include: {
      address: true,
    },
  });

  return users;
}

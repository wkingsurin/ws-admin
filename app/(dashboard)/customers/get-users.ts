import { prisma } from "@/lib/prisma";
import { UserWithRelations } from "./types";

export async function getUsers(): Promise<UserWithRelations[]> {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      address: {
        select: {
          recipient: true,
          country: true,
          city: true,
          street: true,
          postalCode: true,
          phone: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });

  return users;
}

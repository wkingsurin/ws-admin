import { Prisma } from "@/prisma/generated/prisma/client";

export type UserWithRelations = Prisma.UserGetPayload<{
  select: {
    id: true;
    name: true;
    email: true;
    createdAt: true;
    address: {
      select: {
        recipient: true;
        country: true;
        city: true;
        street: true;
        postalCode: true;
        phone: true;
        createdAt: true;
        updatedAt: true;
      };
    };
  };
}>;

import { IUser } from "@/features/customers/types/types";
import { UserWithRelations } from "./types/prisma-types";

export const mapCustomer = (user: UserWithRelations): IUser => {
  return {
    id: user.id,
    name: user.name ?? "",
    email: user.email,
    createdAt: user.createdAt,
    address: {
      recipient: user.address?.recipient ?? null,
      country: user.address?.country ?? null,
      city: user.address?.city ?? null,
      street: user.address?.street ?? null,
      postalCode: user.address?.postalCode ?? null,
      phone: user.address?.phone ?? null,
      createdAt: user.address?.createdAt ?? new Date(),
      updatedAt: user.address?.updatedAt ?? new Date(),
    },
  };
};

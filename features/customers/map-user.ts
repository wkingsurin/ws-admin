import { IUser } from "@/features/customers/types/types";
import { UserWithRelations } from "./types/prisma-types";

export function mapUser(user: UserWithRelations): IUser {
  const { address } = user;

  if (!address) {
    throw new Error("No user address");
  }

  return {
    id: user.id,
    name: user.name ?? "",
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    address: {
      recipient: address.recipient ?? null,
      country: address.country ?? null,
      city: address.city ?? null,
      street: address.street ?? null,
      postalCode: address.postalCode ?? null,
      phone: address.phone ?? null,
      createdAt: address.createdAt,
      updatedAt: address.updatedAt,
    },
  };
}

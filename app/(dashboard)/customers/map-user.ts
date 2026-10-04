import { IUser } from "@/features/customers/types";
import { UserWithRelations } from "./types";

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
    address: {
      recipient: address.recipient ?? "",
      country: address.country ?? "",
      city: address.city ?? "",
      street: address.street ?? "",
      postalCode: address.postalCode ?? "",
      phone: address.phone ?? "",
      createdAt: address.createdAt,
      updatedAt: address.updatedAt,
    },
  };
}

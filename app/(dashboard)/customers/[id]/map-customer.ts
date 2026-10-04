import { UserWithRelations } from "../types";
import { IUser } from "@/features/customers/types";

export const mapCustomer = (user: UserWithRelations): IUser => {
  return {
    id: user.id,
    name: user.name ?? "",
    email: user.email,
    createdAt: user.createdAt,
    address: {
      recipient: user.address?.recipient ?? "",
      country: user.address?.country ?? "",
      city: user.address?.city ?? "",
      street: user.address?.street ?? "",
      postalCode: user.address?.postalCode ?? "",
      phone: user.address?.phone ?? "",
      createdAt: user.address?.createdAt ?? new Date(),
      updatedAt: user.address?.updatedAt ?? new Date(1),
    },
  };
};

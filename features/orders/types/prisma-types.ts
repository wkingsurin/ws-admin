import {
  Checkout,
  DeliveryMethod,
  PaymentMethod,
  Prisma,
} from "@/prisma/generated/prisma/client";
import { IOrderItemRow } from "../components/details/types";

export type ValidCheckout = Checkout & {
  address: string;
  city: string;
  country: string;
  postalCode: string;
  deliveryMethod: DeliveryMethod;
  paymentMethod: PaymentMethod;
};

export type OrderWithRelations = Prisma.OrderGetPayload<{
  include: { items: true };
}>;

export type OrderWithAvailableOptions = Omit<OrderWithRelations, "items"> & {
  items: (OrderWithRelations["items"][number] & {
    availableColors: IOrderItemRow["availableColors"];
    availableSizes: IOrderItemRow["availableSizes"];
  })[];
};

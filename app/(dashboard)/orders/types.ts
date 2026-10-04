import {
  Checkout,
  DeliveryMethod,
  PaymentMethod,
  Prisma,
} from "@/prisma/generated/prisma/client";

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

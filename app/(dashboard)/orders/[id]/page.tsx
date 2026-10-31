import OrderDetails from "./details/order-details";
import { notFound } from "next/navigation";
import { DetailRow } from "./types";
import { mapOrder } from "@/features/orders/map-order";
import { getOrderById } from "@/features/orders/get-order";
import { OrderStatus } from "@/prisma/generated/prisma/enums";
import OrderPageClient from "./client";

type OrderDetails = {
  order: DetailRow[];
  orderDate: DetailRow[];
  customer: DetailRow[];
  shipping: DetailRow[];
  shippingMethods: DetailRow[];
  totals: DetailRow[];
  status: OrderStatus;
};

export default async function OrderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const order = await getOrderById(id);

  if (!order) {
    notFound();
  }

  const mappedOrder = mapOrder(order);

  const orderDetails: OrderDetails = {
    order: [
      { label: "Id", value: mappedOrder.id },
      { label: "Number", value: mappedOrder.orderNumber },
    ],
    orderDate: [
      { label: "Created at", value: mappedOrder.createdAt },
      { label: "Updated at", value: mappedOrder.updatedAt },
    ],
    customer: [
      { label: "Id", value: mappedOrder.customer.name },
      { label: "Name", value: mappedOrder.customer.name },
      { label: "Email", value: mappedOrder.customer.email },
    ],
    shipping: [
      { label: "Address", value: mappedOrder.shipping.address },
      { label: "City", value: mappedOrder.shipping.city },
      { label: "Country", value: mappedOrder.shipping.country },
      { label: "Postal code", value: mappedOrder.shipping.postalCode },
    ],
    shippingMethods: [
      { label: "Payment method", value: mappedOrder.payment.method },
      { label: "Delivery method", value: mappedOrder.delivery.method },
    ],
    totals: [
      { label: "Total price", value: String(mappedOrder.totals.total) },
      { label: "Discount", value: String(mappedOrder.totals.discount) },
    ],
    status: mappedOrder.status,
  };

  return (
    <OrderPageClient
      id={id}
      orderDetails={orderDetails}
      items={mappedOrder.items}
    />
  );
}

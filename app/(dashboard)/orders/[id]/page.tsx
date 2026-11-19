import OrderDetails from "./details/order-details";
import { notFound } from "next/navigation";
import { DetailRow } from "./types";
import { mapOrder } from "@/features/orders/map-order";
import { getOrderById } from "@/features/orders/get-order";
import { OrderStatus } from "@/prisma/generated/prisma/enums";
import OrderPageClient from "./client";
import normalizeDate from "@/lib/normalize-date";

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
      {
        label: "Created",
        value: normalizeDate(mappedOrder.createdAt.toISOString()),
      },
      {
        label: "Updated",
        value: normalizeDate(mappedOrder.updatedAt.toISOString()),
      },
    ],
    customer: [
      { label: "Id", value: mappedOrder.customer.id },
      { label: "Name", value: mappedOrder.customer.name, editable: true },
      { label: "Email", value: mappedOrder.customer.email, editable: true },
    ],
    shipping: [
      { label: "Address", value: mappedOrder.shipping.address, editable: true },
      { label: "City", value: mappedOrder.shipping.city, editable: true },
      { label: "Country", value: mappedOrder.shipping.country, editable: true },
      {
        label: "Postal code",
        value: mappedOrder.shipping.postalCode,
        editable: true,
      },
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

import OrderDetails from "./details/order-details";
import Toolbar from "./toolbar/toolbar";
import OrderItemsTable from "@/features/orders/components/details/table";
import DashboardTable from "@/components/dashboard/dashboard-table";
import OrderToolbar from "@/features/orders/components/details/toolbar";
import { getOrderById } from "./get-order";
import { notFound } from "next/navigation";
import mapOrder from "./map-order";
import { DetailRow } from "./types";

type OrderDetails = {
  order: DetailRow[];
  orderDate: DetailRow[];
  customer: DetailRow[];
  shipping: DetailRow[];
  shippingMethods: DetailRow[];
  totals: DetailRow[];
  status: string;
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
    <div className="flex flex-col gap-3 h-full min-h-0">
      <div className="flex flex-col gap-6 flex-1 min-h-0 overflow-hidden">
        <Toolbar />

        <hr className="bg-black/10" />

        <OrderDetails data={orderDetails} />

        <DashboardTable className="flex-1 min-h-0" toolbar={<OrderToolbar />}>
          <OrderItemsTable data={mappedOrder.items} />
        </DashboardTable>
      </div>
    </div>
  );
}

import { getOrders } from "@/features/orders/get-orders";
import OrdersClient from "./client";
import { mapOrder } from "@/features/orders/map-order";

export default async function OrdersPage() {
  const orders = await getOrders();
  const mappedOrders = orders.map(mapOrder);

  return <OrdersClient data={mappedOrders} />;
}

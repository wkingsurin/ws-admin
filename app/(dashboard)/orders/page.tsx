import OrdersClient from "./client";
import { mapOrder } from "./map-order";
import { getOrders } from "./get-orders";

export default async function OrdersPage() {
  const orders = await getOrders();
  const mappedOrders = orders.map(mapOrder);

  return <OrdersClient data={mappedOrders} />;
}

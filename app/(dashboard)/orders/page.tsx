import { Orders } from "@/features/orders/constants";
import OrdersClient from "./client";

export default function OrdersPage() {
  return <OrdersClient data={Orders} />;
}

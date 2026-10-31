"use client";

import OrderDetails from "./details/order-details";
import DashboardTable from "@/components/dashboard/dashboard-table";
import OrderItemsTable from "@/features/orders/components/details/table";
import Toolbar from "./toolbar/toolbar";
import OrderToolbar from "@/features/orders/components/details/toolbar";
import { DetailRow } from "./types";
import { OrderStatus } from "@/prisma/generated/prisma/enums";
import { IOrderItem } from "@/features/orders/types/types";

interface OrderPageClientProps {
  id: string;
  orderDetails: {
    order: DetailRow[];
    orderDate: DetailRow[];
    customer: DetailRow[];
    shipping: DetailRow[];
    shippingMethods: DetailRow[];
    totals: DetailRow[];
    status: OrderStatus;
  };
  items: IOrderItem[];
}

export default function OrderPageClient({
  id,
  orderDetails,
  items,
}: OrderPageClientProps) {
  return (
    <div className="flex flex-col gap-3 h-full min-h-0">
      <div className="flex flex-col gap-6 flex-1 min-h-0 overflow-hidden">
        <Toolbar id={id} />

        <hr className="bg-black/10" />

        <OrderDetails data={orderDetails} />

        <DashboardTable className="flex-1 min-h-0" toolbar={<OrderToolbar />}>
          <OrderItemsTable data={items} />
        </DashboardTable>
      </div>
    </div>
  );
}

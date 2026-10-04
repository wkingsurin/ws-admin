"use client";

import DashboardTable from "@/components/dashboard/dashboard-table";
import OrdersTable from "@/features/orders/components/table";
import OrdersToolbar from "@/features/orders/components/toolbar";
import { IOrder } from "@/features/orders/types";

export default function OrdersClient({ data }: { data: IOrder[] }) {
  return (
    <DashboardTable
      toolbar={<OrdersToolbar />}
      className="h-[calc(100dvh-12px-12px)]"
    >
      <OrdersTable data={data} />
    </DashboardTable>
  );
}

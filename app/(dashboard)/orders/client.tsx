"use client";

import DashboardTable from "@/components/dashboard/dashboard-table";
import { IOrderRow } from "@/features/orders/components/details/types";
import OrdersTable from "@/features/orders/components/table";
import OrdersToolbar from "@/features/orders/components/toolbar";

export default function OrdersClient({ data }: { data: IOrderRow[] }) {
  return (
    <DashboardTable
      toolbar={<OrdersToolbar />}
      className="h-[calc(100dvh-12px-12px)]"
    >
      <OrdersTable data={data} />
    </DashboardTable>
  );
}

"use client";

import DashboardTable from "@/components/dashboard/dashboard-table";
import TopBar from "@/components/dashboard/topbar";
import OrdersTable from "@/features/orders/components/table";
import OrdersToolbar from "@/features/orders/components/toolbar";

export default function OrdersClient() {
  return (
    <>
      <TopBar>
        <OrdersToolbar />
      </TopBar>

      <DashboardTable className="h-[calc(100dvh-30px-16px-12px-12px)]">
        <OrdersTable />
      </DashboardTable>
    </>
  );
}

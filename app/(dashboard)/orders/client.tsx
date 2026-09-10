"use client";

import Dashboard from "@/components/dashboard/dashboard";
import DashboardTable from "@/components/dashboard/dashboard-table";
import TopBar from "@/components/dashboard/topbar";
import OrdersTable from "@/features/orders/components/table";
import OrdersToolbar from "@/features/orders/components/toolbar";

export default function OrdersClient() {
  return (
    <Dashboard>
      <TopBar>
        <OrdersToolbar />
      </TopBar>
      <DashboardTable>
        <OrdersTable />
      </DashboardTable>
    </Dashboard>
  );
}

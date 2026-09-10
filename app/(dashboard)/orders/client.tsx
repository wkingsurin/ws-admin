"use client";

import DashboardTable from "@/components/dashboard/dashboard-table";
import OrdersTable from "@/features/orders/components/table";

export default function OrdersClient() {
  return (
    <div>
      <DashboardTable>
        <OrdersTable />
      </DashboardTable>
    </div>
  );
}

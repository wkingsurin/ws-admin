"use client";

import DashboardTable from "@/components/dashboard/dashboard-table";
import { OrderColumns } from "@/features/orders/constants";
import { IOrder } from "@/features/orders/types";

export default function OrdersClient({ data }: { data: IOrder[] }) {
  return (
    <div>
      <DashboardTable data={data} columns={OrderColumns} />
    </div>
  );
}

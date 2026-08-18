"use client";

import DataTable from "@/components/data-table/data-table";
import { OrderColumns } from "@/features/orders/constants";
import { IOrder } from "@/features/orders/types";

export default function OrdersClient({ data }: { data: IOrder[] }) {
  return <DataTable data={data} columns={OrderColumns} />;
}

"use client";

import DataTable from "@/components/data-table/data-table";
import { useTableStore } from "@/lib/store/table.store";
import { ORDER_COLUMNS } from "../../constants";
import { IOrder } from "@/features/orders/types/types";

export default function OrdersTable({ data }: { data: IOrder[] }) {
  const selectedIds = useTableStore((s) => s.selectedIds);

  const toggleRow = useTableStore((s) => s.toggleRow);
  const toggleAll = useTableStore((s) => s.toggleAll);

  return (
    <DataTable
      data={data}
      columns={ORDER_COLUMNS}
      getRowId={(item) => item.id}
      getRowStatus={(item) => item.status}
      selectedIds={selectedIds}
      onToggleRow={toggleRow}
      toggleAll={toggleAll}
      statusCell
      path="/orders"
    />
  );
}

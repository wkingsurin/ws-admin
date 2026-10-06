"use client";

import DataTable from "@/components/data-table/data-table";
import { ORDER_COLUMNS } from "../constants/constants";
import { useTableStore } from "@/lib/store/table.store";
import { IOrder } from "../types/types";

export default function OrdersTable({ data }: { data: IOrder[] }) {
  const selectedIds = useTableStore((s) => s.selectedIds);

  const toggleRow = useTableStore((s) => s.toggleRow);
  const toggleAll = useTableStore((s) => s.toggleAll);

  return (
    <div className="min-w-0 h-full">
      <DataTable
        data={data}
        columns={ORDER_COLUMNS}
        getRowId={(order) => order.id}
        selectedIds={selectedIds}
        onToggleRow={toggleRow}
        toggleAll={toggleAll}
      />
    </div>
  );
}

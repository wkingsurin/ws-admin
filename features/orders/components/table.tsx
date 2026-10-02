"use client";

import DataTable from "@/components/data-table/data-table";
import { ORDER_COLUMNS, ORDERS_DATA } from "../constants/constants";
import { useTableStore } from "@/lib/store/table.store";

export default function OrdersTable() {
  const selectedIds = useTableStore((s) => s.selectedIds);

  const toggleRow = useTableStore((s) => s.toggleRow);
  const toggleAll = useTableStore((s) => s.toggleAll);

  return (
    <div className="min-w-0 h-full">
      <DataTable
        data={ORDERS_DATA}
        columns={ORDER_COLUMNS}
        getRowId={(order) => order.id}
        selectedIds={selectedIds}
        onToggleRow={toggleRow}
        toggleAll={toggleAll}
      />
    </div>
  );
}

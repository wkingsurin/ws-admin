"use client";

import DataTable from "@/components/data-table/data-table";
import { useOrdersTableStore } from "../store/orders";
import { ORDER_COLUMNS, ORDERS_DATA } from "../constants";

export default function OrdersTable() {
  const selectedIds = useOrdersTableStore((s) => s.selectedIds);

  const toggleRow = useOrdersTableStore((s) => s.toggleRow);
  const toggleAll = useOrdersTableStore((s) => s.toggleAll);

  return (
    <div className="flex flex-col min-w-0 h-[calc(100dvh-270px-24px-16px-30px)]">
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

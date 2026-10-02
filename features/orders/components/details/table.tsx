"use client";

import DataTable from "@/components/data-table/data-table";
import { ORDER_ITEM_COLUMNS, ORDER_ITEMS } from "../../constants/constants";
import { useTableStore } from "@/lib/store/table.store";

export default function OrderTable() {
  const selectedIds = useTableStore((s) => s.selectedIds);

  const toggleRow = useTableStore((s) => s.toggleRow);
  const toggleAll = useTableStore((s) => s.toggleAll);

  return (
    <DataTable
      data={ORDER_ITEMS}
      columns={ORDER_ITEM_COLUMNS}
      getRowId={(item) => item.id}
      selectedIds={selectedIds}
      onToggleRow={toggleRow}
      toggleAll={toggleAll}
    />
  );
}

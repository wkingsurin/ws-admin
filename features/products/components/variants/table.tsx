"use client";

import DataTable from "@/components/data-table/data-table";
import { ORDER_ITEM_COLUMNS, ORDER_ITEMS } from "../../constants/constants";
import { useOrdersTableStore } from "../../store/orders";

export default function OrderItemsTable() {
  const selectedIds = useOrdersTableStore((s) => s.selectedIds);

  const toggleRow = useOrdersTableStore((s) => s.toggleRow);
  const toggleAll = useOrdersTableStore((s) => s.toggleAll);

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

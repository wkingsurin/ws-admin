"use client";

import DataTable from "@/components/data-table/data-table";
import { useOrdersTableStore } from "@/features/orders/store/orders";
import { FAVORITE_COLUMNS, FAVORITES } from "../../constants";

export default function FavoritesTable() {
  const selectedIds = useOrdersTableStore((s) => s.selectedIds);

  const toggleRow = useOrdersTableStore((s) => s.toggleRow);
  const toggleAll = useOrdersTableStore((s) => s.toggleAll);

  return (
    <DataTable
      data={FAVORITES}
      columns={FAVORITE_COLUMNS}
      getRowId={(item) => item.id}
      selectedIds={selectedIds}
      onToggleRow={toggleRow}
      toggleAll={toggleAll}
    />
  );
}

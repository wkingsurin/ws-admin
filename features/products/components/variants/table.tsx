"use client";

import DataTable from "@/components/data-table/data-table";
import { useOrdersTableStore } from "@/features/orders/store/orders";
import { VAIRANTS_DATA, VARIANT_COLUMNS } from "../../constants";

export default function VariantsTable() {
  const selectedIds = useOrdersTableStore((s) => s.selectedIds);

  const toggleRow = useOrdersTableStore((s) => s.toggleRow);
  const toggleAll = useOrdersTableStore((s) => s.toggleAll);

  return (
    <DataTable
      data={VAIRANTS_DATA}
      columns={VARIANT_COLUMNS}
      getRowId={(item) => item.id}
      selectedIds={selectedIds}
      onToggleRow={toggleRow}
      toggleAll={toggleAll}
    />
  );
}

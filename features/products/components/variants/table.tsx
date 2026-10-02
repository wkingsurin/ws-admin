"use client";

import DataTable from "@/components/data-table/data-table";
import { VAIRANTS_DATA, VARIANT_COLUMNS } from "../../constants";
import { useTableStore } from "@/lib/store/table.store";

export default function VariantsTable() {
  const selectedIds = useTableStore((s) => s.selectedIds);

  const toggleRow = useTableStore((s) => s.toggleRow);
  const toggleAll = useTableStore((s) => s.toggleAll);

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

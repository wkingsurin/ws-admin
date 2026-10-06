"use client";

import DataTable from "@/components/data-table/data-table";
import { VARIANT_COLUMNS } from "../../constants";
import { useTableStore } from "@/lib/store/table.store";
import { IVariant } from "../../types/types";

export default function VariantsTable({ data }: { data: IVariant[] }) {
  const selectedIds = useTableStore((s) => s.selectedIds);

  const toggleRow = useTableStore((s) => s.toggleRow);
  const toggleAll = useTableStore((s) => s.toggleAll);

  return (
    <DataTable
      data={data}
      columns={VARIANT_COLUMNS}
      getRowId={(item) => item.id}
      selectedIds={selectedIds}
      onToggleRow={toggleRow}
      toggleAll={toggleAll}
      pageCell={false}
    />
  );
}

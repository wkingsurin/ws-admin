"use client";

import DataTable from "@/components/data-table/data-table";
import { ProductColumns } from "../constants";
import { useTableStore } from "@/lib/store/table.store";
import { IProduct } from "../types/types";

export default function ProductsTable({ data }: { data: IProduct[] }) {
  const selectedIds = useTableStore((s) => s.selectedIds);

  const toggleRow = useTableStore((s) => s.toggleRow);
  const toggleAll = useTableStore((s) => s.toggleAll);

  return (
    <div className="min-w-0 h-full">
      <DataTable
        data={data}
        columns={ProductColumns}
        getRowId={(order) => order.id}
        selectedIds={selectedIds}
        onToggleRow={toggleRow}
        toggleAll={toggleAll}
      />
    </div>
  );
}

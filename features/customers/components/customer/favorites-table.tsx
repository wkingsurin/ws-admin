"use client";

import DataTable from "@/components/data-table/data-table";
import { useTableStore } from "@/lib/store/table.store";
import { FAVORITE_COLUMNS } from "../../constants";
import { IFavorite } from "../../types/types";

export default function FavoritesTable({ data }: { data: IFavorite[] }) {
  const selectedIds = useTableStore((s) => s.selectedIds);

  const toggleRow = useTableStore((s) => s.toggleRow);
  const toggleAll = useTableStore((s) => s.toggleAll);

  return (
    <DataTable
      data={data}
      columns={FAVORITE_COLUMNS}
      getRowId={(item) => item.id}
      selectedIds={selectedIds}
      onToggleRow={toggleRow}
      toggleAll={toggleAll}
    />
  );
}

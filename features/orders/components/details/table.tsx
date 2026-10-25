"use client";

import DataTable from "@/components/data-table/data-table";
import { ORDER_ITEM_COLUMNS } from "../../constants/constants";
import { useTableStore } from "@/lib/store/table.store";
import { IOrderItem } from "../../types/types";

export default function OrderTable({ data }: { data: IOrderItem[] }) {
  const selectedIds = useTableStore((s) => s.selectedIds);

  const toggleRow = useTableStore((s) => s.toggleRow);
  const toggleAll = useTableStore((s) => s.toggleAll);

  return (
    <DataTable
      data={data}
      columns={ORDER_ITEM_COLUMNS}
      getRowId={(item) => item.id}
      selectedIds={selectedIds}
      onToggleRow={toggleRow}
      toggleAll={toggleAll}
      pageCell={false}
    />
  );
}

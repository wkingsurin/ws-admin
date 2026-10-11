"use client";

import DataTable from "@/components/data-table/data-table";
import { ORDER_ITEM_COLUMNS } from "../../constants/constants";
import { useTableStore } from "@/lib/store/table.store";
import { IOrderItem } from "../../types/types";
import { updateData } from "@/features/customers/update-data";

export default function OrderTable({ data }: { data: IOrderItem[] }) {
  const selectedIds = useTableStore((s) => s.selectedIds);

  const toggleRow = useTableStore((s) => s.toggleRow);
  const toggleAll = useTableStore((s) => s.toggleAll);

  const columns = ORDER_ITEM_COLUMNS.map((column) => {
    if (column.id === "quantity") {
      return {
        ...column,
        onSave: async (orderItem: IOrderItem, value: string) => {
          await updateData({
            entity: "ORDER_ITEM",
            id: orderItem.id,
            data: { quantity: Number(value) },
          });
        },
      };
    }

    return column;
  });

  return (
    <DataTable
      data={data}
      columns={columns}
      getRowId={(item) => item.id}
      selectedIds={selectedIds}
      onToggleRow={toggleRow}
      toggleAll={toggleAll}
      pageCell={false}
    />
  );
}

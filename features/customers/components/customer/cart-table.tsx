"use client";

import DataTable from "@/components/data-table/data-table";
import { useTableStore } from "@/lib/store/table.store";
import { CART_COLUMNS } from "../../constants";
import { ICartItem } from "../../types/types";
import { updateData } from "../../update-data";

export default function CartItemsTable({ data }: { data: ICartItem[] }) {
  const selectedIds = useTableStore((s) => s.selectedIds);

  const toggleRow = useTableStore((s) => s.toggleRow);
  const toggleAll = useTableStore((s) => s.toggleAll);

  const columns = CART_COLUMNS.map((column) => {
    if (column.id === "quantity") {
      return {
        ...column,
        onSave: async (cartItem: ICartItem, value: string) => {
          await updateData({
            entity: "CART_ITEM",
            id: cartItem.id,
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

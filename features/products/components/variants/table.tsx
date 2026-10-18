"use client";

import DataTable from "@/components/data-table/data-table";
import { VARIANT_COLUMNS } from "../../constants";
import { useTableStore } from "@/lib/store/table.store";
import { IVariant } from "../../types/types";
import { updateData } from "@/features/customers/update-data";
import { IVariantRow } from "./types";

export default function VariantsTable({ data }: { data: IVariantRow[] }) {
  const selectedIds = useTableStore((s) => s.selectedIds);

  const toggleRow = useTableStore((s) => s.toggleRow);
  const toggleAll = useTableStore((s) => s.toggleAll);

  const columns = VARIANT_COLUMNS.map((column) => {
    if (column.id === "price") {
      return {
        ...column,
        onSave: async (variant: IVariant, value: string) => {
          await updateData({
            entity: "VARIANT",
            id: variant.id,
            data: { price: Number(value) },
          });
        },
      };
    }

    if (column.id === "oldPrice") {
      return {
        ...column,
        onSave: async (variant: IVariant, value: string) => {
          await updateData({
            entity: "VARIANT",
            id: variant.id,
            data: { oldPrice: value === "" ? null : Number(value) },
          });
        },
      };
    }

    if (column.id === "stock") {
      return {
        ...column,
        onSave: async (variant: IVariant, value: string) => {
          await updateData({
            entity: "VARIANT",
            id: variant.id,
            data: { stock: Number(value) },
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

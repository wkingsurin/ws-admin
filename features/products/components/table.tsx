"use client";

import DataTable from "@/components/data-table/data-table";
import { ProductColumns } from "../constants";
import { useTableStore } from "@/lib/store/table.store";
import { IProduct } from "../types/types";
import { updateData } from "@/features/customers/update-data";
import { IProductRow } from "./variants/types";

export default function ProductsTable({ data }: { data: IProductRow[] }) {
  const selectedIds = useTableStore((s) => s.selectedIds);

  const toggleRow = useTableStore((s) => s.toggleRow);
  const toggleAll = useTableStore((s) => s.toggleAll);

  const columns = ProductColumns.map((column) => {
    if (column.id === "title") {
      return {
        ...column,
        onSave: async (product: IProduct, value: string) => {
          await updateData({
            entity: "PRODUCT",
            id: product.id,
            data: { title: value },
          });
        },
      };
    }

    if (column.id === "description") {
      return {
        ...column,
        onSave: async (product: IProduct, value: string) => {
          await updateData({
            entity: "PRODUCT",
            id: product.id,
            data: { description: value },
          });
        },
      };
    }

    if (column.id === "isAvailable") {
      return {
        ...column,
        onSave: async (product: IProduct, value: string) => {
          await updateData({
            entity: "PRODUCT",
            id: product.id,
            data: { isAvailable: value === "true" },
          });
        },
      };
    }

    if (column.id === "isNew") {
      return {
        ...column,
        onSave: async (product: IProduct, value: string) => {
          await updateData({
            entity: "PRODUCT",
            id: product.id,
            data: { isNew: value === "true" },
          });
        },
      };
    }

    return column;
  });

  return (
    <div className="min-w-0 h-full">
      <DataTable
        data={data}
        columns={columns}
        getRowId={(order) => order.id}
        selectedIds={selectedIds}
        onToggleRow={toggleRow}
        toggleAll={toggleAll}
      />
    </div>
  );
}

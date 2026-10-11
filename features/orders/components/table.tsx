"use client";

import DataTable from "@/components/data-table/data-table";
import { ORDER_COLUMNS } from "../constants/constants";
import { useTableStore } from "@/lib/store/table.store";
import { IOrder } from "../types/types";
import { updateData } from "@/features/customers/update-data";

export default function OrdersTable({ data }: { data: IOrder[] }) {
  const selectedIds = useTableStore((s) => s.selectedIds);

  const toggleRow = useTableStore((s) => s.toggleRow);
  const toggleAll = useTableStore((s) => s.toggleAll);

  const columns = ORDER_COLUMNS.map((column) => {
    if (column.id === "customerEmail") {
      return {
        ...column,
        onSave: async (order: IOrder, value: string) => {
          await updateData({
            entity: "ORDER",
            id: order.id,
            data: { customerEmail: value },
          });
        },
      };
    }

    if (column.id === "address") {
      return {
        ...column,
        onSave: async (order: IOrder, value: string) => {
          await updateData({
            entity: "ORDER",
            id: order.id,
            data: { shippingAddress: value },
          });
        },
      };
    }

    if (column.id === "city") {
      return {
        ...column,
        onSave: async (order: IOrder, value: string) => {
          await updateData({
            entity: "ORDER",
            id: order.id,
            data: { shippingCity: value },
          });
        },
      };
    }

    if (column.id === "country") {
      return {
        ...column,
        onSave: async (order: IOrder, value: string) => {
          await updateData({
            entity: "ORDER",
            id: order.id,
            data: { shippingCountry: value },
          });
        },
      };
    }

    if (column.id === "shippingPostalCode") {
      return {
        ...column,
        onSave: async (order: IOrder, value: string) => {
          await updateData({
            entity: "ORDER",
            id: order.id,
            data: { shippingPostalCode: value },
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

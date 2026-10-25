"use client";

import DataTable from "@/components/data-table/data-table";
import { useTableStore } from "@/lib/store/table.store";
import { CUSTOMER_COLUMNS } from "../constants";
import { IUser } from "../types/types";
import { updateData } from "../update-data";
import { updateUserEmail } from "../actions/update-user-email";
import { updateUserPhone } from "../actions/update-user-phone";

export default function CustomersTable({ data }: { data: IUser[] }) {
  const selectedIds = useTableStore((s) => s.selectedIds);

  const toggleRow = useTableStore((s) => s.toggleRow);
  const toggleAll = useTableStore((s) => s.toggleAll);

  const columns = CUSTOMER_COLUMNS.map((column) => {
    if (column.id === "name") {
      return {
        ...column,
        onSave: async (user: IUser, value: string) => {
          await updateData({
            entity: "USER",
            id: user.id,
            data: { name: value },
          });
        },
      };
    }

    if (column.id === "email") {
      return {
        ...column,
        onSave: async (user: IUser, value: string) => {
          const result = await updateUserEmail(user.id, { email: value });

          if (!result.success) {
            throw new Error(
              result.errors.email?.[0] ??
                result.errors._form?.[0] ??
                "Не удалось изменить email",
            );
          }
        },
      };
    }

    if (column.id === "recipient") {
      return {
        ...column,
        onSave: async (user: IUser, value: string) => {
          await updateData({
            entity: "USER",
            id: user.id,
            data: { address: { recipient: value } },
          });
        },
      };
    }

    if (column.id === "country") {
      return {
        ...column,
        onSave: async (user: IUser, value: string) => {
          await updateData({
            entity: "USER",
            id: user.id,
            data: { address: { country: value } },
          });
        },
      };
    }

    if (column.id === "city") {
      return {
        ...column,
        onSave: async (user: IUser, value: string) => {
          await updateData({
            entity: "USER",
            id: user.id,
            data: { address: { city: value } },
          });
        },
      };
    }

    if (column.id === "street") {
      return {
        ...column,
        onSave: async (user: IUser, value: string) => {
          await updateData({
            entity: "USER",
            id: user.id,
            data: { address: { street: value } },
          });
        },
      };
    }

    if (column.id === "postalCode") {
      return {
        ...column,
        onSave: async (user: IUser, value: string) => {
          await updateData({
            entity: "USER",
            id: user.id,
            data: { address: { postalCode: value } },
          });
        },
      };
    }

    if (column.id === "phone") {
      return {
        ...column,
        onSave: async (user: IUser, value: string) => {
          const result = await updateUserPhone(user.id, { phone: value });

          if (!result.success) {
            throw new Error(
              result.errors.phone?.[0] ??
                result.errors._form?.[0] ??
                "Не удалось изменить номер телефона",
            );
          }
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

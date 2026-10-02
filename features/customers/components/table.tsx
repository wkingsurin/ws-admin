"use client";

import DataTable from "@/components/data-table/data-table";
import { useTableStore } from "@/lib/store/table.store";
import { CUSTOMER_COLUMNS, CUSTOMERS } from "../constants";

export default function CustomersTable() {
  const selectedIds = useTableStore((s) => s.selectedIds);

  const toggleRow = useTableStore((s) => s.toggleRow);
  const toggleAll = useTableStore((s) => s.toggleAll);

  return (
    <div className="min-w-0 h-full">
      <DataTable
        data={CUSTOMERS}
        columns={CUSTOMER_COLUMNS}
        getRowId={(order) => order.id}
        selectedIds={selectedIds}
        onToggleRow={toggleRow}
        toggleAll={toggleAll}
      />
    </div>
  );
}

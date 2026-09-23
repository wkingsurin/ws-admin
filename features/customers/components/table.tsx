"use client";

import DataTable from "@/components/data-table/data-table";
import { useOrdersTableStore } from "@/features/orders/store/orders";
import { CUSTOMER_COLUMNS, CUSTOMERS } from "../constants";

export default function CustomersTable() {
  const selectedIds = useOrdersTableStore((s) => s.selectedIds);

  const toggleRow = useOrdersTableStore((s) => s.toggleRow);
  const toggleAll = useOrdersTableStore((s) => s.toggleAll);

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

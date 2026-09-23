import DashboardTable from "@/components/dashboard/dashboard-table";
import CustomersTable from "@/features/customers/components/table";
import CustomersToolbar from "@/features/customers/components/toolbar";

export default function CustomersClient() {
  return (
    <DashboardTable
      toolbar={<CustomersToolbar />}
      className="h-[calc(100dvh-12px-12px)]"
    >
      <CustomersTable />
    </DashboardTable>
  );
}

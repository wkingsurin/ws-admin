import DashboardTable from "@/components/dashboard/dashboard-table";
import CustomersTable from "@/features/customers/components/table";
import CustomersToolbar from "@/features/customers/components/toolbar";
import { IUser } from "@/features/customers/types";

export default function CustomersClient({ data }: { data: IUser[] }) {
  return (
    <DashboardTable
      toolbar={<CustomersToolbar />}
      className="h-[calc(100dvh-12px-12px)]"
    >
      <CustomersTable data={data} />
    </DashboardTable>
  );
}

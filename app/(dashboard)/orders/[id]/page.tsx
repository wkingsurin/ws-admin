import OrderDetails from "./details/order-details";
import Toolbar from "./toolbar/toolbar";
import OrderItemsTable from "@/features/orders/components/details/table";
import DashboardTable from "@/components/dashboard/dashboard-table";
import OrderToolbar from "@/features/orders/components/details/toolbar";

export default function OrderPage() {
  return (
    <div className="flex flex-col gap-3 h-full min-h-0">
      <div className="flex flex-col gap-6 flex-1 min-h-0 overflow-hidden">
        <Toolbar />

        <hr className="bg-black/10" />

        <OrderDetails />

        <DashboardTable className="flex-1 min-h-0" toolbar={<OrderToolbar />}>
          <OrderItemsTable />
        </DashboardTable>
      </div>
    </div>
  );
}

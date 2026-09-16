import OrderDetails from "./details/order-details";
import Toolbar from "./toolbar/toolbar";
import OrderItemsTable from "@/features/orders/components/details/table";
import DashboardTable from "@/components/dashboard/dashboard-table";
import OrderDetailsToolbar from "@/features/orders/components/details/toolbar";

export default function OrderPage() {
  return (
    <div className="flex flex-col gap-3 h-full min-h-0">
      <div className="flex flex-col gap-3 flex-1 min-h-0 overflow-hidden">
        <div className="flex flex-col gap-3 p-3 rounded-md w-full min-h-[260px] bg-white border-[0.5px] border-black/10">
          <Toolbar />
          <OrderDetails />
        </div>

        <DashboardTable
          className="flex-1 min-h-0"
          toolbar={<OrderDetailsToolbar />}
        >
          <OrderItemsTable />
        </DashboardTable>
      </div>
    </div>
  );
}

import DashboardTable from "@/components/dashboard/dashboard-table";
import { OrderItems, OrderProductColumns } from "@/features/orders/constants";
import Toolbar from "./toolbar/toolbar";
import OrderDetails from "./details/order-details";

export default function OrderPage() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 p-3 rounded-md w-full min-h-[260px] bg-white border-[0.5px] border-black/10">
        <Toolbar />
        <OrderDetails />
      </div>
      <DashboardTable data={OrderItems} columns={OrderProductColumns} />
    </div>
  );
}

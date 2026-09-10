import Toolbar from "./toolbar/toolbar";
import OrderDetails from "./details/order-details";

export default function OrderPage() {
  return (
    <div className="flex flex-col gap-3 max-h-[100dvh] overflow-hidden">
      <div className="flex flex-col gap-3 p-3 rounded-md w-full min-h-[260px] bg-white border-[0.5px] border-black/10">
        <Toolbar />
        <OrderDetails />
      </div>
    </div>
  );
}

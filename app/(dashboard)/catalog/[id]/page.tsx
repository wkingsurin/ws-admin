import DashboardTable from "@/components/dashboard/dashboard-table";
import VariantToolbar from "@/features/orders/components/details/toolbar";
import ProductDetails from "./details/product-details";
import Toolbar from "./toolbar/toolbar";
import VariantsTable from "@/features/products/components/variants/table";

export default function ProductPage() {
  return (
    <div className="flex flex-col gap-3 h-full min-h-0">
      <div className="flex flex-col gap-3 flex-1 min-h-0 overflow-hidden">
        <div className="flex flex-col gap-3 p-3 rounded-md w-full min-h-[260px] bg-white border-[0.5px] border-black/10">
          <Toolbar />
          <ProductDetails />
        </div>

        <DashboardTable className="flex-1 min-h-0" toolbar={<VariantToolbar />}>
          <VariantsTable />
        </DashboardTable>
      </div>
    </div>
  );
}

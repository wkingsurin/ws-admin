import DashboardTable from "@/components/dashboard/dashboard-table";
import ProductsTable from "@/features/products/components/table";
import ProductsToolbar from "@/features/products/components/toolbar";
import { IProduct } from "@/features/products/types";

export default function CatalogClient({ data }: { data: IProduct[] }) {
  return (
    <DashboardTable
      toolbar={<ProductsToolbar />}
      className="h-[calc(100dvh-12px-12px)]"
    >
      <ProductsTable data={data} />
    </DashboardTable>
  );
}

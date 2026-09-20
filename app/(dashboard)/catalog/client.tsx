import DashboardTable from "@/components/dashboard/dashboard-table";
import ProductsTable from "@/features/products/components/table";
import ProductsToolbar from "@/features/products/components/toolbar";

export default function CatalogClient() {
  return (
    <DashboardTable
      toolbar={<ProductsToolbar />}
      className="h-[calc(100dvh-12px-12px)]"
    >
      <ProductsTable />
    </DashboardTable>
  );
}

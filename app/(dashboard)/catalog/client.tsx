"use client";

import DashboardTable from "@/components/dashboard/dashboard-table";
import ProductsTable from "@/features/products/components/table";
import ProductsToolbar from "@/features/products/components/toolbar";
import { IProductRow } from "@/features/products/components/variants/types";

interface CatalogClientProps {
  data: IProductRow[];
  brands: { id: string; name: string; slug: string }[];
  categories: { id: string; name: string; slug: string }[];
}

export default function CatalogClient({
  data,
  brands,
  categories,
}: CatalogClientProps) {
  return (
    <DashboardTable
      toolbar={<ProductsToolbar brands={brands} categories={categories} />}
      className="h-[calc(100dvh-12px-12px)]"
    >
      <ProductsTable data={data} />
    </DashboardTable>
  );
}

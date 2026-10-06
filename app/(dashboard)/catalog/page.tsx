import { getProducts } from "@/features/products/get-products";
import CatalogClient from "./client";
import { mapProduct } from "@/features/products/map-product";

export default async function CatalogPage() {
  const products = await getProducts();
  const mappedProducts = products.map(mapProduct);

  return <CatalogClient data={mappedProducts} />;
}

import CatalogClient from "./client";
import { getProducts } from "./get-products";
import { mapProduct } from "./map-product";

export default async function CatalogPage() {
  const products = await getProducts();
  const mappedProducts = products.map(mapProduct);

  return <CatalogClient data={mappedProducts} />;
}

import { getProducts } from "@/features/products/get-products";
import CatalogClient from "./client";
import { mapProduct } from "@/features/products/map-product";
import { IProductRow } from "@/features/products/components/variants/types";

export default async function CatalogPage() {
  const products = await getProducts();

  const mappedProducts: IProductRow[] = products.map((product) => {
    const mappedProduct = mapProduct(product);

    const availableSizes = [
      ...new Set(product.variants.map((variant) => variant.size)),
    ].sort();

    return {
      ...mappedProduct,
      variants: mappedProduct.variants.map((variant) => ({
        ...variant,
        availableSizes,
      })),
    };
  });

  return <CatalogClient data={mappedProducts} />;
}

import { getProducts } from "@/features/products/get-products";
import CatalogClient from "./client";
import { mapProduct } from "@/features/products/map-product";
import { IProductRow } from "@/features/products/components/variants/types";
import getBrands from "@/features/products/components/get-brands";
import getCategories from "@/features/products/components/get-categories";

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

  const brands = await getBrands();
  const sortedBrands = brands.sort((a, b) => (b.name[0] > a.name[0] ? -1 : 1));

  const categories = await getCategories();
  const sotredCategories = categories.sort((a, b) =>
    b.name[0] > a.name[0] ? -1 : 1,
  );

  return (
    <CatalogClient
      data={mappedProducts}
      brands={sortedBrands}
      categories={sotredCategories}
    />
  );
}

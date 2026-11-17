import { getProducts } from "@/features/products/get-products";
import CatalogClient from "./client";
import { mapProduct } from "@/features/products/map-product";
import { IProductRow } from "@/features/products/components/variants/types";
import getBrands from "@/features/products/components/get-brands";
import getCategories from "@/features/products/components/get-categories";

export default async function CatalogPage() {
  const products = await getProducts();
  const brands = await getBrands();
  const categories = await getCategories();

  const mappedProducts: IProductRow[] = products.map((product) => {
    const mappedProduct = mapProduct(product);

    const availableSizes = [
      ...new Set(product.variants.map((variant) => variant.size)),
    ].sort();

    const colorsMap = new Map(
      mappedProduct.options.color.map((color) => [color.id, color]),
    );

    return {
      ...mappedProduct,
      variants: mappedProduct.variants.map((variant) => {
        const color = colorsMap.get(variant.attributes.colorId);

        return {
          ...variant,
          availableSizes,

          color: color ? { id: color.id, name: color.name } : null,

          images: color?.images ?? [],
        };
      }),
      brands: brands.map((brand) => ({ label: brand.name, value: brand.id })),
      categories: categories.map((category) => ({
        label: category.name,
        value: category.id,
      })),
    };
  });

  const sortedBrands = brands.sort((a, b) => (b.name[0] > a.name[0] ? -1 : 1));

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

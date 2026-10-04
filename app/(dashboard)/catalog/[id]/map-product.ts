import { IProduct } from "@/features/products/types";
import { ProductWithRelations } from "../types";

export const mapProduct = (product: ProductWithRelations): IProduct => {
  const colors = product.productColors.map((color) => ({
    id: color.id,
    name: color.name,
    slug: color.slug,
    images: color.images,
  }));
  const colorsMap = new Map(colors.map((color) => [color.id, color]));
  const sizes = [...new Set(product.variants.map((variant) => variant.size))]
    .sort()
    .map((size) => ({ value: size }));

  const mappedProduct: IProduct = {
    id: product.id,
    title: product.title,
    slug: product.slug,
    description: product.description,
    currency: product.currency,

    brand: product.brand,

    category: product.category,

    isAvailable: product.isAvailable,
    isNew: product.isNew,

    options: { color: colors, size: sizes },

    variants: product.variants.map((variant) => {
      const color = colorsMap.get(variant.colorId);

      return {
        id: variant.id,
        sku: variant.sku,
        price: variant.price,
        oldPrice: variant.oldPrice,
        stock: variant.stock,
        attributes: {
          colorId: color?.id ?? "",
          size: variant.size,
        },
      };
    }),
  };

  return mappedProduct;
};

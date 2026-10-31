import DashboardTable from "@/components/dashboard/dashboard-table";
import Toolbar from "./toolbar/toolbar";
import VariantsTable from "@/features/products/components/variants/table";
import ImageCard from "./details/image-card";
import ProductToolbar from "@/features/products/components/variants/toolbar";
import { notFound } from "next/navigation";
import { DetailRow } from "../../orders/[id]/types";
import { getProductById } from "@/features/products/get-product";
import { mapProduct } from "@/features/products/map-product";
import { IVariantRow } from "@/features/products/components/variants/types";
import getColors from "@/features/products/components/get-colors";
import mapColor from "@/features/products/components/variants/mapColor";
import ProductPageClient from "./client";

type ProductDetails = DetailRow[];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  const mappedProduct = mapProduct(product);

  const availableSizes = [
    ...new Set(
      mappedProduct.variants.map((varaint) => varaint.attributes.size),
    ),
  ].sort();

  const imagesByVariantId = new Map(
    product.variants.map((variant) => [
      variant.id,
      variant.color.images.map(({ id, src }) => ({ id, src })),
    ]),
  );

  const colorByVariantId = new Map(
    product.variants.map((variant) => [
      variant.id,
      { id: variant.color.id, name: variant.color.name },
    ]),
  );

  const variantRows: IVariantRow[] = mappedProduct.variants.map((variant) => ({
    ...variant,
    availableSizes,
    images: imagesByVariantId.get(variant.id) ?? [],
    color: colorByVariantId.get(variant.id) ?? null,
  }));

  const stock = mappedProduct.variants.reduce(
    (acc, current) => (acc += current.stock),
    0,
  );

  const productDetails: ProductDetails = [
    { label: "Id", value: mappedProduct.id },
    { label: "title", value: mappedProduct.title },
    { label: "Brand", value: mappedProduct.brand.name },
    { label: "Category", value: mappedProduct.category.name },
    { label: "Stock", value: String(stock) },
    { label: "Price", value: "7790" },
    { label: "Old price", value: "9790" },
    { label: "Created at", value: "2026-07-25 14:59:19" },
    { label: "Updated at", value: "2026-07-25 14:59:19" },
  ];
  const productRows = productDetails.filter(
    (row) =>
      row.label.toLowerCase() !== "title" &&
      row.label.toLowerCase() !== "created at" &&
      row.label.toLowerCase() !== "updated at",
  );
  const productDate = productDetails.filter(
    (row) =>
      row.label.toLowerCase() === "created at" ||
      row.label.toLowerCase() === "updated at",
  );

  const firstColor = mappedProduct.options.color[0];
  const firstImage = firstColor?.images[0];

  const image: { alt: string; src: string } = {
    alt: mappedProduct.title,
    src: firstImage?.src ?? "",
  };

  const colors = await getColors(id);
  const mappedColors = colors.map(mapColor);

  return (
    <ProductPageClient
      id={id}
      image={image}
      data={mappedProduct}
      rows={productRows}
      date={productDate}
      colors={mappedColors}
      variantRows={variantRows}
    />
  );
}

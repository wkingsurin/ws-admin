import DashboardTable from "@/components/dashboard/dashboard-table";
import Toolbar from "./toolbar/toolbar";
import VariantsTable from "@/features/products/components/variants/table";
import ImageCard from "./details/image-card";
import ProductToolbar from "@/features/products/components/variants/toolbar";
import { notFound } from "next/navigation";
import { DetailRow } from "../../orders/[id]/types";
import { getProductById } from "@/features/products/get-product";
import { mapProduct } from "@/features/products/map-product";

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
  console.log(`[mappedProduct]:`, mappedProduct);

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

  const image: { alt: string; src: string } = {
    alt: mappedProduct.title,
    src: mappedProduct.options.color[0].images[0].src,
  };

  return (
    <div className="flex flex-col gap-3 h-full min-h-0">
      <div className="flex flex-col gap-6 flex-1 min-h-0 overflow-hidden">
        <Toolbar />

        <hr className="bg-black/10" />

        <div className="flex gap-8 bg-white border-[0.5] border-black/10 p-5 rounded-2xl">
          <div className="flex items-center justify-center w-1/4 h-55 p-3 bg-[#F9FAFB]/30 border-[0.5px] border-[#F3F4F6] rounded-lg">
            <ImageCard src={image.src} alt={image.alt} />
          </div>
          <div className="flex flex-col gap-2 w-3/4">
            <span className="font-bold text-xs text-[#99A1AF] uppercase">
              Product Specification
            </span>
            <div className="flex flex-col gap-4 w-full">
              <h3 className="font-bold text-base leading-[150%]">
                {mappedProduct.title}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {productRows.map((row) => (
                  <div key={row.label} className="flex gap-3 text-sm">
                    <span className="w-24 text-[#99A1AF]">{row.label}</span>
                    <p className="font-mono text-[#101828]">{row.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-6 w-full border-t-[0.5px] border-[#F3F4F6] pt-3">
                {productDate.map((row) => (
                  <div
                    key={row.label}
                    className="flex gap-3 font-mono text-xs text-[#99A1AF]"
                  >
                    <span>{row.label}</span>
                    <p>{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <DashboardTable className="flex-1 min-h-0" toolbar={<ProductToolbar />}>
          <VariantsTable data={mappedProduct.variants} />
        </DashboardTable>
      </div>
    </div>
  );
}

import DashboardTable from "@/components/dashboard/dashboard-table";
import Toolbar from "./toolbar/toolbar";
import VariantsTable from "@/features/products/components/variants/table";
import { DetailRow } from "../../orders/[id]/types";
import ImageCard from "./details/image-card";
import ProductToolbar from "@/features/products/components/variants/toolbar";

export default function ProductPage() {
  const product: DetailRow[] = [
    { label: "Id", value: "cms0hvxjm006h3wuakimzot9p" },
    { label: "title", value: "Under Armour Hoodie" },
    { label: "Brand", value: "Unuder Armour" },
    { label: "Category", value: "hoodie" },
    { label: "Stock", value: "7" },
    { label: "Price", value: "7790" },
    { label: "Old price", value: "9790" },
    { label: "Created at", value: "2026-07-25 14:59:19" },
    { label: "Updated at", value: "2026-07-25 14:59:19" },
  ];
  const productRows = product.filter(
    (row) =>
      row.label.toLowerCase() !== "title" &&
      row.label.toLowerCase() !== "created at" &&
      row.label.toLowerCase() !== "updated at",
  );
  const productDate = product.filter(
    (row) =>
      row.label.toLowerCase() === "created at" ||
      row.label.toLowerCase() === "updated at",
  );

  const image: { alt: string; src: string } = {
    alt: "Under Armour Hoodie",
    src: "/products/hoodies/under-armour-white/image-1-480.png",
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
                Under Armour Hoodie
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
          <VariantsTable />
        </DashboardTable>
      </div>
    </div>
  );
}

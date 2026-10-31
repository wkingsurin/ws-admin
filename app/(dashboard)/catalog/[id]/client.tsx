"use client";

import DashboardTable from "@/components/dashboard/dashboard-table";
import Toolbar from "./toolbar/toolbar";
import ProductToolbar from "@/features/products/components/variants/toolbar";
import VariantsTable from "@/features/products/components/variants/table";
import ImageCard from "./details/image-card";
import { IProduct } from "@/features/products/types/types";
import { DetailRow } from "../../orders/[id]/types";
import { InitialColor } from "@/features/products/components/variants/add-variant-dialog";
import { IVariantRow } from "@/features/products/components/variants/types";

interface ProductPageClientProps {
  id: string;
  image: { alt: string; src: string };
  data: IProduct;
  rows: DetailRow[];
  date: DetailRow[];
  colors: InitialColor[];
  variantRows: IVariantRow[];
}

export default function ProductPageClient({
  id,
  image,
  data,
  rows,
  date,
  colors,
  variantRows,
}: ProductPageClientProps) {
  return (
    <div className="flex flex-col gap-3 h-full min-h-0">
      <div className="flex flex-col gap-6 flex-1 min-h-0 overflow-hidden">
        <Toolbar id={id} />

        <hr className="bg-black/10" />

        <div className="flex gap-8 bg-white border-[0.5] border-black/10 p-5 rounded-2xl">
          <div className="flex items-center justify-center w-1/4 h-55 p-3 bg-[#F9FAFB]/30 border-[0.5px] border-[#F3F4F6] rounded-lg select-none">
            {image.src ? (
              <ImageCard src={image.src} alt={image.alt} />
            ) : (
              <div className="flex items-center justify-center text-gray-400">
                *У товара не загружено изображение
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2 w-3/4">
            <span className="font-bold text-xs text-[#99A1AF] uppercase">
              Product Specification
            </span>
            <div className="flex flex-col gap-4 w-full">
              <h3 className="font-bold text-base leading-[150%]">
                {data.title}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {rows.map((row) => (
                  <div key={row.label} className="flex gap-3 text-sm">
                    <span className="w-24 text-[#99A1AF]">{row.label}</span>
                    <p className="font-mono text-[#101828]">{row.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-6 w-full border-t-[0.5px] border-[#F3F4F6] pt-3">
                {date.map((row) => (
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

        <DashboardTable
          className="flex-1 min-h-0"
          toolbar={<ProductToolbar id={id} colors={colors} />}
        >
          <VariantsTable data={variantRows} />
        </DashboardTable>
      </div>
    </div>
  );
}

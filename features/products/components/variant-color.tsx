"use client";

import { ImageIcon, X } from "lucide-react";
import ProductVariantsTable, {
  ProductVariantDraft,
} from "./create-product/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useId, useState } from "react";
import { Carousel } from "@/components/carousel/carousel";

interface VariantColorProps {
  color: string;
  sizes: string[];
  variants: ProductVariantDraft[];
  images: File[];
  isActive: boolean;
  mode?: "create-product" | "add-variants";
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  onDelete: () => void;
  onVariantChange: (variants: ProductVariantDraft[]) => void;
  onImageChange: (files: File[]) => void;
  onImageDelete: (index: number) => void;
}

export default function VariantColor({
  isActive,
  color,
  sizes,
  variants,
  images,
  mode = "create-product",
  onClick,
  onDelete,
  onVariantChange,
  onImageChange,
  onImageDelete,
}: VariantColorProps) {
  const [previews, setPreviews] = useState<string[]>([]);

  const inputId = useId();

  const canEditColor = mode === "create-product";

  useEffect(() => {
    const urls = images.map((file) => URL.createObjectURL(file));

    setPreviews(urls);

    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [images]);

  return (
    <div className="flex flex-col bg-white rounded-lg border-[1px] border-[#E5E7EB]/80 overflow-hidden transition duration-100">
      <div
        data-id="black"
        className="relative flex justify-between w-full h-10 p-3"
        onClick={onClick}
      >
        <span className="text-xs font-bold font-mono text-[#99A1AF] uppercase select-none">
          {color}
        </span>
        {canEditColor && (
          <button
            className="group/delete absolute top-1 right-1 flex items-center justify-center w-8 h-8 hover:bg-destructive/10 rounded-sm transition duration-100"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onDelete();
            }}
          >
            <X className="size-4 stroke-[1.5px] group-hover/delete:stroke-destructive transition duration-100" />
          </button>
        )}
      </div>

      {isActive && (
        <div className="flex flex-col gap-3 px-3 pb-3">
          {canEditColor && (
            <Carousel
              images={images}
              previews={previews}
              onImageDelete={onImageDelete}
            >
              <div>
                <Input
                  type="file"
                  id={inputId}
                  accept="image/*"
                  className="hidden"
                  multiple
                  onChange={(e) => {
                    const files = Array.from(e.target.files ?? []);

                    if (files.length > 0) {
                      onImageChange(files);
                    }

                    e.target.value = "";
                  }}
                />
                <Label
                  htmlFor={inputId}
                  className="flex flex-col gap-1 items-center justify-center w-18 h-24 bg-white rounded-lg border-[1px] border-[#D1D5DC] border-dashed hover:border-black transition duration-100"
                >
                  <ImageIcon className="stroke-[1.5px] size-3 stroke-[#D1D5DC]" />
                  <span className="text-xs text-[#D1D5DC]">Upload</span>
                </Label>
              </div>
            </Carousel>
          )}
          <ProductVariantsTable
            sizes={sizes}
            variants={variants}
            onChange={onVariantChange}
          />
        </div>
      )}
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

export interface ProductVariantDraft {
  size: string;
  price: string;
  oldPrice: string;
  stock: string;
  isActive: boolean;
}

interface ProductVariantsTableProps {
  sizes: string[];
  variants: ProductVariantDraft[];
  onChange: (variants: ProductVariantDraft[]) => void;
}

export default function ProductVariantsTable({
  sizes,
  variants,
  onChange,
}: ProductVariantsTableProps) {
  const [inProcess, setInProcess] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("");

  const existingSizes = variants.map((variant) => variant.size);

  const handleAddSize = () => {
    if (!selectedSize || existingSizes.includes(selectedSize)) return;

    const nextVariants = [
      ...variants,
      {
        size: selectedSize,
        price: "",
        oldPrice: "",
        stock: "0",
        isActive: true,
      },
    ];

    onChange(nextVariants);

    setSelectedSize("");
    setInProcess(false);
  };

  const handleClearSize = () => {
    setSelectedSize("");
    setInProcess(false);
  };

  const handleFieldChange = (
    size: string,
    field: "price" | "oldPrice" | "stock",
    value: string,
  ) => {
    onChange(
      variants.map((variant) =>
        variant.size === size ? { ...variant, [field]: value } : variant,
      ),
    );
  };

  const handleRemoveSize = (size: string) => {
    onChange(variants.filter((variant) => variant.size !== size));
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-xl border-[1px] overflow-hidden">
        <div className="flex items-center w-full h-[30px] px-3 bg-[#F9FAFB] border-b-[1px] border-[#F3F4F6]">
          <span className=" text-[#364153] text-xs font-semibold select-none">
            Variants of size
          </span>
        </div>
        <table className="w-full min-w-[600px] table-fixed text-sm bg-white">
          <thead>
            <tr className="border-b border-[#F3F4F6] bg-[#F9FAFB]/40 select-none">
              <th className="w-[16%] px-3 py-3 text-xs text-[#99A1AF] text-left font-mono font-bold uppercase">
                Size
              </th>
              <th className="w-[25%] px-3 py-3 text-xs text-[#99A1AF] text-left font-mono font-bold uppercase">
                Price
              </th>
              <th className="w-[25%] px-3 py-3 text-xs text-[#99A1AF] text-left font-mono font-bold uppercase">
                Oldprice
              </th>
              <th className="w-[22%] px-3 py-3 text-xs text-[#99A1AF] text-left font-mono font-bold uppercase">
                Stock
              </th>
            </tr>
          </thead>

          <tbody>
            {variants.map((variant) => (
              <tr
                key={variant.size}
                className="h-10 bg-white hover:bg-[#F9FAFB] border-b last:border-0 bg-[#F9FAFB] select-none"
              >
                <td className="px-3 font-bold">{variant.size}</td>

                <td className="px-3">
                  <Input
                    type="number"
                    min={0}
                    step={1}
                    value={variant.price}
                    placeholder="0"
                    onChange={(event) =>
                      handleFieldChange(
                        variant.size,
                        "price",
                        event.target.value,
                      )
                    }
                  />
                </td>

                <td className="px-3">
                  <Input
                    type="number"
                    min={0}
                    step={1}
                    value={variant.oldPrice}
                    className="line-through text-[#99A1AF]"
                    placeholder="—"
                    onChange={(event) =>
                      handleFieldChange(
                        variant.size,
                        "oldPrice",
                        event.target.value,
                      )
                    }
                  />
                </td>

                <td className="px-3">
                  <Input
                    type="number"
                    min={0}
                    step={1}
                    value={variant.stock}
                    className="font-bold text-[#6A7282]"
                    onChange={(event) =>
                      handleFieldChange(
                        variant.size,
                        "stock",
                        event.target.value,
                      )
                    }
                  />
                </td>

                <td className="px-3 text-center">
                  <Button
                    type="button"
                    variant="destructive"
                    className="w-[30px] h-[30px] bg-transparent hover:bg-destructive/10"
                    size="icon"
                    aria-label={`Remove size ${variant.size}`}
                    onClick={() => handleRemoveSize(variant.size)}
                  >
                    <Trash2 className="size-4 text-red-500" />
                  </Button>
                </td>
              </tr>
            ))}

            {variants.length === 0 && (
              <tr className="h-10 select-none">
                <td
                  colSpan={5}
                  className="px-3 text-center text-xs text-[#D1D5DC]"
                >
                  No sizes added yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {!inProcess ? (
        <Button
          className="bg-white border-[1px] border-dashed border-[#E5E7EB] hover:border-black hover:bg-white text-black text-xs"
          onClick={() => setInProcess(true)}
        >
          <Plus className="stroke-[1px] stroke-black" /> Add size
        </Button>
      ) : (
        <div className="flex gap-3">
          <Select
            value={selectedSize}
            onValueChange={(value) => setSelectedSize(value ?? "")}
          >
            <SelectTrigger className="w-full select-none">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent alignItemWithTrigger={false}>
              <SelectGroup>
                {sizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            disabled={!selectedSize}
            className="px-3 h-9"
            onClick={handleAddSize}
          >
            Confirm
          </Button>
          <Button
            className="px-3 h-9"
            variant="destructive"
            onClick={handleClearSize}
          >
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
}

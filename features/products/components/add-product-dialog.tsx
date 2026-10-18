"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { useState } from "react";
import { ProductVariantDraft } from "./create-product/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import VariantColor from "./variant-color";
import { ProductColorDraft } from "./create-product/types";
import { createProduct } from "../create-product";
import { uploadProductImage } from "../upload-product-image";

interface AddProductDialogProps {
  brands: { id: string; name: string; slug: string }[];
  categories: { id: string; name: string; slug: string }[];
}

export default function AddProductDialog({
  brands,
  categories,
}: AddProductDialogProps) {
  const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [isNew, setIsNew] = useState<boolean>(false);

  const [activeBrandId, setActiveBrandId] = useState<string>("");
  const [activeCategoryId, setActiveCategoryId] = useState<string>("");

  const [error, setError] = useState<string | null>(null);

  const [colors, setColors] = useState<ProductColorDraft[]>([]);
  const [activeColorId, setActiveColorId] = useState<string | null>(null);
  const [newColorName, setNewColorName] = useState("");
  const [inProcess, setInProcess] = useState<boolean>(false);

  const handleAddColor = () => {
    const name = newColorName.trim();

    if (!name) return;

    const alreadyExists = colors.some(
      (color) => color.name.toLowerCase() === name.toLowerCase(),
    );

    if (alreadyExists) return;

    const newColor: ProductColorDraft = {
      id: crypto.randomUUID(),
      name,
      variants: [],
      images: [],
    };

    setColors((prev) => [...prev, newColor]);
    setActiveColorId(newColor.id);
    setNewColorName("");
    setInProcess(false);
  };

  const handleDeleteColor = (colorId: string) => {
    setColors((prev) => prev.filter((color) => color.id !== colorId));

    setActiveColorId((prev) => (prev === colorId ? null : prev));
  };

  const handleColorVariantsChange = (
    colorId: string,
    variants: ProductVariantDraft[],
  ) => {
    setColors((prev) =>
      prev.map((color) =>
        color.id === colorId ? { ...color, variants } : color,
      ),
    );
  };

  const handleImagesChange = (colorId: string, newImages: File[]) => {
    setColors((prev) =>
      prev.map((color) =>
        color.id === colorId
          ? { ...color, images: [...color.images, ...newImages] }
          : color,
      ),
    );
  };

  const handleImageDelete = (colorId: string, imageIndex: number) => {
    setColors((prev) =>
      prev.map((color) =>
        color.id === colorId
          ? {
              ...color,
              images: color.images.filter((_, i) => i !== imageIndex),
            }
          : color,
      ),
    );
  };

  const handleCreateProduct = async () => {
    setError(null);

    try {
      const colorsWithImages = await Promise.all(
        colors.map(async (color) => {
          const images = await Promise.all(
            color.images.map(async (file) => {
              const formData = new FormData();
              formData.append("file", file);

              const result = await uploadProductImage(formData);

              if (!result.url) {
                throw new Error(result.error ?? "Ошибка загрузки изображения");
              }

              return result.url;
            }),
          );

          return { name: color.name, variants: color.variants, images };
        }),
      );

      const result = await createProduct({
        title,
        description,
        brandId: activeBrandId,
        categoryId: activeCategoryId,
        currency: "USD",
        isAvailable,
        isNew,
        colors: colorsWithImages,
      });

      console.log(`Product created:`, result.id);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Не удалось создать товар",
      );
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <span className="text-sm font-bold text-[#101828] border-b-[1px] border-[#F3F4F6] pb-4">
        Add product
      </span>
      <form className="flex flex-col items-start gap-4">
        <div className="flex items-start gap-5 rounded-md w-full">
          <div className="flex flex-col gap-2 w-2/3 h-full p-3 bg-[#F9FAFB] rounded-lg border-[1px] border-[#E5E7EB]/80">
            <span className="text-xs font-bold text-[#101828] pb-1 select-none">
              Colors and variants
            </span>

            <div className="flex flex-col gap-2">
              {colors.map((color) => (
                <VariantColor
                  key={color.id}
                  color={color.name}
                  sizes={sizes}
                  variants={color.variants}
                  images={color.images}
                  isActive={activeColorId === color.id}
                  onClick={() =>
                    setActiveColorId((prev) =>
                      prev === color.id ? null : color.id,
                    )
                  }
                  onDelete={() => handleDeleteColor(color.id)}
                  onVariantChange={(variants) =>
                    handleColorVariantsChange(color.id, variants)
                  }
                  onImageChange={(files) => handleImagesChange(color.id, files)}
                  onImageDelete={(index) => handleImageDelete(color.id, index)}
                />
              ))}
            </div>

            {!inProcess ? (
              <Button
                className="bg-white border-[1px] border-dashed border-[#E5E7EB] hover:border-black hover:bg-white text-black text-xs"
                onClick={() => setInProcess(true)}
              >
                <Plus className="stroke-[1px] stroke-black" /> Add color
              </Button>
            ) : (
              <div className="flex gap-3">
                <Input
                  value={newColorName}
                  onChange={(e) => setNewColorName(e.target.value)}
                  placeholder="Enter color"
                  className="bg-white px-3 border-[1px] border-[#E5E7EB] font-medium font-mono placeholder:text-[#4A5565]/50 text-xs text-[#6A7282] select-none"
                />
                <Button
                  className="px-3"
                  disabled={!newColorName}
                  onClick={() => {
                    setInProcess(false);
                    handleAddColor();
                  }}
                >
                  Confirm
                </Button>
                <Button
                  variant="destructive"
                  className="px-3"
                  onClick={() => setInProcess(false)}
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-3 w-1/3">
            <div className="flex flex-col items-start gap-1">
              <Label
                htmlFor="brand"
                className="font-medium text-xs text-[#6A7282]"
              >
                Brand
              </Label>
              <Select
                id="brand"
                value={activeBrandId ?? ""}
                onValueChange={(value) => setActiveBrandId(value ?? "")}
              >
                <SelectTrigger className="w-full bg-[#F9FAFB] select-none">
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
                <SelectContent
                  alignItemWithTrigger={false}
                  className="max-h-[200px]"
                >
                  <SelectGroup>
                    {brands.map((brand) => (
                      <SelectItem key={brand.id} value={brand.id}>
                        {brand.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col items-start gap-1">
              <Label
                htmlFor="category"
                className="font-medium text-xs text-[#6A7282]"
              >
                Category
              </Label>
              <Select
                id="category"
                value={activeCategoryId}
                onValueChange={(value) => setActiveCategoryId(value ?? "")}
              >
                <SelectTrigger className="w-full bg-[#F9FAFB] select-none">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent
                  alignItemWithTrigger={false}
                  className="max-h-[200px]"
                >
                  <SelectGroup>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-2 flex flex-col items-start gap-1">
              <Label
                htmlFor="title"
                className="font-medium text-xs text-[#6A7282]"
              >
                Title
              </Label>
              <Input
                id="title"
                placeholder="Enter product title"
                className="px-3 bg-[#F9FAFB] border-[1px] border-[#E5E7EB] rounded-sm font-mono text-xs placeholder:text-[#4A5565]/50 select-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-span-2 flex flex-col items-start gap-1">
              <Label
                htmlFor="description"
                className="font-medium text-xs text-[#6A7282]"
              >
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Enter product description"
                className="min-h-20 max-h-20 overflow-hidden px-3 bg-[#F9FAFB] border-[1px] border-[#E5E7EB] rounded-sm resize-none font-mono text-sm placeholder:text-[#4A5565]/50 select-none"
                maxLength={420}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="is-available"
                  className="bg-white"
                  checked={isAvailable}
                  onCheckedChange={(checked) =>
                    setIsAvailable(checked === true)
                  }
                />
                <Label htmlFor="is-available" className="text-sm">
                  isAvailable
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="is-new"
                  className="bg-white"
                  checked={isNew}
                  onCheckedChange={(checked) => setIsNew(checked === true)}
                />
                <Label htmlFor="is-new" className="text-sm">
                  isNew
                </Label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 w-full border-t-[1px] border-[#F3F4F6] pt-4">
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button className="w-45 px-4 bg-white border-[1px] border-[#E5E7EB] text-black hover:bg-[#F9FAFB]">
            Check data
          </Button>
          <Button className="w-45 px-4" onClick={handleCreateProduct}>
            Create
          </Button>
        </div>
      </form>
    </div>
  );
}

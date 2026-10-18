import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ProductColorDraft } from "../create-product/types";
import VariantColor from "../variant-color";
import { ProductVariantDraft } from "../create-product/table";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { createProductColorVariants } from "../../create-product-variant";

export interface InitialColor {
  id: string;
  name: string;
  variants: {
    size: string;
    price: string;
    oldPrice: string;
    stock: string;
    isActive: boolean;
  }[];
}

interface AddVariantColorDraft extends ProductColorDraft {
  colorId?: string;
}

interface AddVariantDialogProps {
  id: string;
  initialColors: InitialColor[];
}

export default function AddVariantDialog({
  id,
  initialColors,
}: AddVariantDialogProps) {
  const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];

  const [colors, setColors] = useState<AddVariantColorDraft[]>(
    initialColors.map((color) => ({
      id: crypto.randomUUID(),
      colorId: color.id,
      name: color.name,
      variants: color.variants.map((variant) => ({
        size: variant.size,
        price: variant.price,
        oldPrice: variant.oldPrice,
        stock: variant.stock,
        isActive: variant.isActive,
      })),
      images: [],
    })),
  );

  const [activeColorId, setActiveColorId] = useState<string | null>(null);
  const [newColorName, setNewColorName] = useState("");
  const [inProcess, setInProcess] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleColorVariantsChange = (
    localColorId: string,
    variants: ProductVariantDraft[],
  ) => {
    setColors((prev) =>
      prev.map((color) =>
        color.id === localColorId ? { ...color, variants } : color,
      ),
    );

    setError(null);
  };

  const handleAddColor = () => {
    const name = newColorName.trim();

    if (!name) {
      setError("Укажи название цвета");
      return;
    }

    const alreadyExists = colors.some(
      (color) => color.name.trim().toLowerCase() === name.toLowerCase(),
    );

    if (alreadyExists) {
      setError(`Цвет "${name}" уже добавлен или существует у товара`);
      return;
    }

    const newColor: AddVariantColorDraft = {
      id: crypto.randomUUID(),
      name,
      variants: [],
      images: [],
    };

    setColors((prev) => [...prev, newColor]);
    setActiveColorId(newColor.id);
    setNewColorName("");
    setInProcess(false);
    setError("");
  };

  const handleCreateProductVariant = async () => {
    const changedColors = colors.filter((color) => {
      if (!color.variants.length) return false;

      if (!color.colorId) return true;

      const initialColor = initialColors.find(
        (item) => item.id === color.colorId,
      );

      const initialSizes = new Set(
        initialColor?.variants.map((variant) =>
          variant.size.trim().toLowerCase(),
        ) ?? [],
      );

      return color.variants.some(
        (variant) => !initialSizes.has(variant.size.trim().toLowerCase()),
      );
    });

    if (!changedColors.length) {
      setError(`Добавь хотя-бы один новый размер или цвет с вариантами`);
      return;
    }

    setIsSaving(true);
    setError(null);

    try {
      const formData = new FormData();

      const payload = {
        productId: id,
        colors: changedColors.map((color) => {
          const initialColor = color.colorId
            ? initialColors.find((item) => item.id === color.colorId)
            : undefined;

          const initialSizes = new Set(
            initialColor?.variants.map((variant) =>
              variant.size.trim().toLowerCase(),
            ) ?? [],
          );

          return {
            clientKey: color.id,
            ...(color.colorId ? { colorId: color.colorId } : {}),
            name: color.name,
            variants: color.variants.filter(
              (variant) => !initialSizes.has(variant.size.trim().toLowerCase()),
            ),
          };
        }),
      };

      formData.append("payload", JSON.stringify(payload));

      for (const color of changedColors) {
        if (color.colorId) continue;

        for (const file of color.images) {
          formData.append(`images:${color.id}`, file);
        }
      }

      await createProductColorVariants(formData);

      setColors((prev) =>
        prev.map((color) => ({ ...color, variants: color.variants })),
      );
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Не удалось создать варианты",
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <span className="text-md font-bold text-[#101828]">Add variants</span>
      <form
        className="flex flex-col items-start gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          void handleCreateProductVariant();
        }}
      >
        <div className="flex flex-col gap-2 w-full h-full p-3 bg-[#F9FAFB] rounded-lg border-[1px] border-[#E5E7EB]/80">
          <span className="text-xs font-bold text-[#101828] pb-1 select-none">
            Colors and variants
          </span>

          <div className="flex flex-col gap-2">
            {colors.map((color) => {
              const isExistingColor = Boolean(color.colorId);

              return (
                <VariantColor
                  key={color.id}
                  mode={isExistingColor ? "add-variants" : "create-product"}
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
                  onDelete={() => {
                    if (isExistingColor) return;

                    setColors((prev) =>
                      prev.filter((item) => item.id !== color.id),
                    );

                    setActiveColorId((prev) =>
                      prev === color.id ? null : prev,
                    );

                    setError(null);
                  }}
                  onVariantChange={(variants) =>
                    handleColorVariantsChange(color.id, variants)
                  }
                  onImageChange={(files) => {
                    if (isExistingColor) return;

                    setColors((prev) =>
                      prev.map((item) =>
                        item.id === color.id
                          ? { ...item, images: [...item.images, ...files] }
                          : item,
                      ),
                    );
                  }}
                  onImageDelete={(index) => {
                    if (isExistingColor) return;

                    setColors((prev) =>
                      prev.map((item) =>
                        item.id === color.id
                          ? {
                              ...item,
                              images: item.images.filter(
                                (_, imageIndex) => imageIndex !== index,
                              ),
                            }
                          : item,
                      ),
                    );
                  }}
                />
              );
            })}
          </div>

          {!inProcess ? (
            <Button
              type="button"
              className="bg-white border-[1px] border-dashed border-[#E5E7EB] hover:border-black hover:bg-white text-black text-xs"
              onClick={() => {
                setInProcess(true);
                setError(null);
              }}
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
                type="button"
                className="px-3"
                disabled={!newColorName}
                onClick={handleAddColor}
              >
                Confirm
              </Button>

              <Button
                type="button"
                variant="destructive"
                className="px-3"
                onClick={() => {
                  setInProcess(false);
                  setNewColorName("");
                  setError(null);
                }}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <div className="flex justify-end w-full">
          <Button type="submit" disabled={isSaving} className="min-w-60 px-4">
            {isSaving ? "Saving..." : "Confirm"}
          </Button>
        </div>
      </form>
    </div>
  );
}

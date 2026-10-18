import { ColorWithRelations } from "../../types/prisma-types";
import { InitialColor } from "./add-variant-dialog";

export default function mapColor(color: ColorWithRelations): InitialColor {
  return {
    id: color.id,
    name: color.name,
    variants: color.variants.map((variant) => ({
      size: String(variant.size),
      price: String(variant.price),
      oldPrice: String(variant.oldPrice),
      stock: String(variant.stock),
      isActive: variant.isActive,
    })),
  };
}

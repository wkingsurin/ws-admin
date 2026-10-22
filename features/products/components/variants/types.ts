import { IProduct, IVariant } from "../../types/types";

export interface IVariantRow extends IVariant {
  availableSizes: string[];
  images: { id: string; src: string }[];
  color: { id: string; name: string } | null;
}

export interface IProductRow extends Omit<IProduct, "variants"> {
  variants: IVariantRow[];
}

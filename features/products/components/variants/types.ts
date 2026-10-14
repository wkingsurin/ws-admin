import { IProduct, IVariant } from "../../types/types";

export interface IVariantRow extends IVariant {
  availableSizes: string[];
}

export interface IProductRow extends Omit<IProduct, "variants"> {
  variants: IVariantRow[];
}

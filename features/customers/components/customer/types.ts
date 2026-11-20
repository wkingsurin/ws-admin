import { ICartItem } from "../../types/types";

export interface ICartItemRow extends ICartItem {
  productId: string;
  availableColors: { label: string; value: string }[];
  availableSizes: { label: string; value: string }[];
}

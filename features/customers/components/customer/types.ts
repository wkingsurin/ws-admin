import { ICartItem } from "../../types/types";

export interface ICartItemRow extends ICartItem {
  availableColors: { label: string; value: string }[];
  availableSizes: { label: string; value: string }[];
}

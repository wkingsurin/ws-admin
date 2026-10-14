import { IOrder, IOrderItem } from "../../types/types";

export interface IOrderRow extends IOrder {
  items: IOrderItemRow[];
}

export interface IOrderItemRow extends IOrderItem {
  availableColors: {
    label: string;
    value: string;
  }[];
  availableSizes: {
    label: string;
    value: string;
  }[];
}

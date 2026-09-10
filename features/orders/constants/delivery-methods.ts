import { DeliveryMethod } from "../types";

export const DELIVERY_METHODS: Record<
  DeliveryMethod,
  { label: string; className: string; dotClassName: string }
> = {
  COURIER: { label: "Courier", className: "", dotClassName: "" },
  PICKUP: { label: "Pick up", className: "", dotClassName: "" },
  POST: { label: "Post", className: "", dotClassName: "" },
};

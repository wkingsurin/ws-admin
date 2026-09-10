import { PaymentMethod } from "../types";

export const PAYMENT_METHODS: Record<
  PaymentMethod,
  { label: string; className: string; dotClassName: string }
> = {
  CARD: { label: "Card", className: "", dotClassName: "" },
  CASH: { label: "Cash", className: "", dotClassName: "" },
  PAYPAL: { label: "PayPal", className: "", dotClassName: "" },
};

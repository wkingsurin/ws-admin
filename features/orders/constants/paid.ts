export const PAID_STATUSES = [true, false];

export type PaidStatusKey = "true" | "false";

export const ORDER_PAID_STATUSES: Record<
  PaidStatusKey,
  { label: string; className: string; dotClassName: string }
> = {
  true: { label: "Оплачено", className: "", dotClassName: "" },
  false: { label: "Не оплачено", className: "", dotClassName: "" },
};

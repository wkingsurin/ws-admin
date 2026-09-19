import DetailsCard from "./card";
import { DetailRow } from "../types";

export default function OrderDetails() {
  const order: DetailRow[] = [
    { label: "Id", value: "cms0hvxjm006h3wuakimzot9p" },
    { label: "Number", value: "ORD-1784992471870" },
    { label: "Payment method", value: "CARD" },
    { label: "Created at", value: "2026-07-25 14:59:19" },
    { label: "Updated at", value: "2026-07-25 14:59:19" },
  ];
  const customer: DetailRow[] = [
    { label: "Id", value: "cms0hvxjm006h3wuakimzot9p" },
    { label: "Name", value: "Jane Doe" },
    { label: "Email", value: "janedoe@example.com" },
  ];
  const shipping: DetailRow[] = [
    { label: "Address", value: "714 Green St, Apt 2B" },
    { label: "City", value: "New York" },
    { label: "Country", value: "United States" },
    { label: "Postal code", value: "CA 94108" },
    { label: "Delivery method", value: "Pick up" },
  ];
  const totals: DetailRow[] = [
    { label: "Total price", value: "$155.80" },
    { label: "Discount", value: "0" },
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      <DetailsCard title="Order" data={order} status="Paid" />
      <DetailsCard title="Customer" data={customer} editable={true} />
      <DetailsCard title="Shipping" data={shipping} editable={true} />
      <DetailsCard title="Totals" data={totals} />
    </div>
  );
}

import DetailsCard from "./card";
import { DetailRow } from "../types";
import Metadata from "./metadata";
import EditCustomerDialog from "./edit-customer-dialog";
import EditShippingDialog from "./edit-shipping-dialog";
import PriceCard from "./price-card";

export default function OrderDetails() {
  const order: DetailRow[] = [
    { label: "Id", value: "cms0hvxjm006h3wuakimzot9p" },
    { label: "Number", value: "ORD-1784992471870" },
  ];
  const orderDate: DetailRow[] = [
    { label: "Created at", value: "2026-07-25" },
    { label: "Updated at", value: "2026-07-25" },
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
  ];
  const shippingMethods: DetailRow[] = [
    { label: "Payment method", value: "CARD" },
    { label: "Delivery method", value: "PICKUP" },
  ];
  const totals: DetailRow[] = [
    { label: "Total price", value: "$155.80" },
    { label: "Discount", value: "0" },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      <DetailsCard
        title="Order"
        data={order}
        status="Paid"
        bottom={
          <div className="flex gap-6 border-t-[0.5px] border-[#E5E7EB]/60 pt-2">
            {orderDate.map((date) => (
              <div
                key={date.label}
                className="flex items-center justify-center gap-4 h-5 rounded-sm font-mono text-xs text-[#6A7282] leading-[100%]"
              >
                <span>{date.label}</span>
                {date.value}
              </div>
            ))}
          </div>
        }
      />
      <DetailsCard
        title="Customer"
        data={customer}
        editable={true}
        editDialog={<EditCustomerDialog title="Edit customer data" />}
      />
      <DetailsCard
        title="Shipping"
        data={shipping}
        editable={true}
        bottom={
          <div className="flex gap-2 border-t-[0.5px] border-[#E5E7EB]/60 pt-2">
            {shippingMethods.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-center h-5 px-2 bg-[#E5E7EB] rounded-sm font-mono text-xs text-[#6A7282] leading-[100%]"
              >
                {row.value}
              </div>
            ))}
          </div>
        }
        editDialog={<EditShippingDialog title="Edit shipping data" />}
      />
      <PriceCard title="Totals" data={totals} mode="dark" />
    </div>
  );
}

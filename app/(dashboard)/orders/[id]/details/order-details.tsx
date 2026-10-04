import DetailsCard from "./card";
import { DetailRow } from "../types";
import EditCustomerDialog from "./edit-customer-dialog";
import EditShippingDialog from "./edit-shipping-dialog";
import PriceCard from "./price-card";

type OrderDetails = {
  order: DetailRow[];
  orderDate: DetailRow[];
  customer: DetailRow[];
  shipping: DetailRow[];
  shippingMethods: DetailRow[];
  totals: DetailRow[];
  status: string;
};

export default function OrderDetails({ data }: { data: OrderDetails }) {
  return (
    <div className="grid grid-cols-4 gap-6">
      <DetailsCard
        title="Order"
        data={data.order}
        status={data.status}
        bottom={
          <div className="flex gap-6 border-t-[0.5px] border-[#E5E7EB]/60 pt-2">
            {data.orderDate.map((date) => (
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
        data={data.customer}
        editable={true}
        editDialog={<EditCustomerDialog title="Edit customer data" />}
      />
      <DetailsCard
        title="Shipping"
        data={data.shipping}
        editable={true}
        bottom={
          <div className="flex gap-2 border-t-[0.5px] border-[#E5E7EB]/60 pt-2">
            {data.shippingMethods.map((row) => (
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
      <PriceCard title="Totals" data={data.totals} mode="dark" />
    </div>
  );
}

import { DetailRow } from "../../types";
import EditOrderForm from "./edit-order-form";

interface EditShippingProps {
  orderId: string;
  title: string;
  initialData: DetailRow[];
}

export default function EditShippingDialog({
  title,
  orderId,
  initialData,
}: EditShippingProps) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-sm font-bold text-[#101828] border-b-[1px] border-[#F3F4F6] pb-4">
        {title}
      </span>
      <EditOrderForm
        orderId={orderId}
        initialData={initialData}
        type="shipping"
      />
    </div>
  );
}

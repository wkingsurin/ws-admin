import { Button } from "@/components/ui/button";
import { DetailRow } from "../../types";
import LabelField from "./label-field";
import { useState } from "react";
import { toast } from "@/components/ui/toast";
import mapData from "./map-data";
import updateOrderDetails from "./update-order-details";

interface EditOrderFormProps {
  orderId: string;
  initialData: DetailRow[];
  type: "customer" | "shipping";
}

export default function EditOrderForm({
  orderId,
  initialData,
  type,
}: EditOrderFormProps) {
  const [customerData, setCustomerData] = useState(() =>
    initialData.filter((data) => data.editable),
  );

  const initialObject = Object.fromEntries(
    initialData
      .filter((data) => data.editable)
      .map((item) => [item.label.toLowerCase(), item.value.trim()]),
  );
  const dataObject = Object.fromEntries(
    customerData.map((item) => [item.label.toLowerCase(), item.value.trim()]),
  );

  const hasChanges = Object.keys(dataObject).some(
    (key) => initialObject[key] !== dataObject[key],
  );

  return (
    <form
      className="flex flex-col items-start gap-4"
      onSubmit={async (event) => {
        event.preventDefault();

        if (!hasChanges) {
          toast.add({
            title: "Изменений нет",
            type: "info",
          });
          return;
        }

        const mappedData = mapData({ data: dataObject, type });

        const result = await updateOrderDetails(orderId, mappedData);

        toast.add({
          title: result.message,
          type: result.success ? "success" : "error",
        });
      }}
    >
      <div className="grid gap-3 w-full">
        {customerData.map(
          (row) =>
            row.editable && (
              <LabelField
                key={row.label}
                label={row.label}
                initialValue={row.value}
                onChange={(value) => {
                  setCustomerData((prev) => {
                    return prev.map((r) =>
                      r.label === row.label ? { ...r, value } : r,
                    );
                  });
                }}
              />
            ),
        )}
      </div>
      <div className="flex justify-end w-full gap-3 border-t-[1px] border-[#F3F4F6] pt-4">
        <Button type="submit" className="w-1/2 px-4" disabled={!hasChanges}>
          Confirm
        </Button>
      </div>
    </form>
  );
}

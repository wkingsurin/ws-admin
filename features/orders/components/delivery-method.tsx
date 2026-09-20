import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DeliveryMethod as Method } from "../types";

interface PaymentMethodProps {
  method: Method;
}

export default function DeliveryMethod({ method }: PaymentMethodProps) {
  const items = [
    { label: method, value: method },
    { label: "COURIER", value: "COURIER" },
    { label: "POST", value: "POST" },
  ];

  return (
    <Select items={items} defaultValue={items[0].label}>
      <SelectTrigger className="w-full items-center justify-between rounded-none border-none focus-visible:border-none shadow-none px-2">
        <SelectValue />
      </SelectTrigger>
      <SelectContent alignItemWithTrigger={false}>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

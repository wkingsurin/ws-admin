import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PaymentMethod as Method } from "../types/types";

interface PaymentMethodProps {
  method: Method;
  onChange?: (value: Method) => void;
}

export default function PaymentMethod({
  method,
  onChange,
}: PaymentMethodProps) {
  const items = [
    { label: "CARD", value: "CARD" },
    { label: "CASH", value: "CASH" },
    { label: "PAYPAL", value: "PAYPAL" },
  ];

  return (
    <Select
      items={items}
      value={method}
      onValueChange={(value) => onChange?.(value as Method)}
    >
      <SelectTrigger className="w-full items-center justify-between rounded-sm border-[0.5px] bg-white focus-visible:border-none shadow-none px-2">
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

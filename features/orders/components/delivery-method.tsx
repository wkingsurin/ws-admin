import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DeliveryMethod as Method } from "../types/types";

interface PaymentMethodProps {
  method: Method;
  onChange?: (value: Method) => void;
}

export default function DeliveryMethod({
  method,
  onChange,
}: PaymentMethodProps) {
  const items = [
    { label: "Pick up", value: "PICKUP" },
    { label: "Courier", value: "COURIER" },
    { label: "Post", value: "POST" },
  ];

  return (
    <Select
      items={items}
      value={method}
      onValueChange={(value) => onChange?.(value as Method)}
    >
      <SelectTrigger
        size="sm"
        className="w-full items-center justify-between rounded-sm border-[0.5px] bg-white focus-visible:border-none shadow-none px-2 font-mono text-xs text-[#1E2939]"
      >
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

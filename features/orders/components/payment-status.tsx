import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PaymentStatusProps {
  isPaid: boolean;
  onChange?: (value: boolean) => void;
}

export default function PaymentStatus({
  isPaid,
  onChange,
}: PaymentStatusProps) {
  const items = [
    { label: "PAID", value: "true" },
    { label: "UNPAID", value: "false" },
  ];

  return (
    <Select
      items={items}
      value={String(isPaid)}
      onValueChange={(value) => onChange?.(value === "true")}
    >
      <SelectTrigger className="w-full items-center justify-between rounded-sm border-[0.5px] bg-white focus-visible:border-none shadow-none px-2">
        <SelectValue />
      </SelectTrigger>
      <SelectContent alignItemWithTrigger={false}>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem key={item.label} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

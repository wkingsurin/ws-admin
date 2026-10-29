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
    { label: "Paid", value: true },
    { label: "Unpaid", value: false },
  ];

  return (
    <Select
      items={items}
      value={String(isPaid)}
      onValueChange={(value) => onChange?.(value === "true")}
    >
      <SelectTrigger
        size="sm"
        className={`w-full items-center justify-between rounded-sm border-[0.5px] bg-white focus-visible:border-none shadow-none px-2 font-mono text-xs text-[#1E2939] ${isPaid ? "bg-green-200 border-green-300" : "border-[#E5E7EB]"}`}
      >
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

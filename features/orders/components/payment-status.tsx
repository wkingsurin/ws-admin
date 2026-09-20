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
}

export default function PaymentStatus({ isPaid }: PaymentStatusProps) {
  const items = [
    { label: "Paid", value: "Paid" },
    { label: "Unpaid", value: "Unpaid" },
  ];

  return (
    <Select
      items={items}
      defaultValue={isPaid ? items[0].label : items[1].label}
    >
      <SelectTrigger className="w-full items-center justify-between rounded-none border-none focus-visible:border-none shadow-none px-2">
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

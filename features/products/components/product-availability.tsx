import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductAvailabilityProps {
  isAvailable: boolean;
  onChange?: (value: boolean) => void;
}

export default function ProductAvailability({
  isAvailable,
  onChange,
}: ProductAvailabilityProps) {
  const items = [
    { label: "Available", value: "true" },
    { label: "Not available", value: "false" },
  ];

  return (
    <Select
      items={items}
      value={String(isAvailable)}
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

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
      <SelectTrigger
        size="sm"
        className={`w-full items-center justify-between rounded-sm border-[0.5px] border-transparent bg-white focus-visible:border-none shadow-none px-2 font-mono text-xs text-[#1E2939] ${isAvailable ? "bg-green-200 border-green-300" : "bg-gray-100 border-[#E5E7EB]"}`}
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

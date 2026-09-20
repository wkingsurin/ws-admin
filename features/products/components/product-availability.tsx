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
}

export default function ProductAvailability({
  isAvailable,
}: ProductAvailabilityProps) {
  const items = [
    { label: "true", value: "Available" },
    { label: "false", value: "Not available" },
  ];

  return (
    <Select
      items={items}
      defaultValue={isAvailable ? items[0].value : items[1].value}
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

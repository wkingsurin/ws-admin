import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductConditionProps {
  isNew: boolean;
  onChange?: (value: boolean) => void;
}

export default function ProductCondition({
  isNew,
  onChange,
}: ProductConditionProps) {
  const items = [
    { label: "New", value: "true" },
    { label: "Not new", value: "false" },
  ];

  return (
    <Select
      items={items}
      value={String(isNew)}
      onValueChange={(value) => onChange?.(value === "true")}
    >
      <SelectTrigger
        size="sm"
        className={`w-full items-center justify-between rounded-sm border-[0.5px] bg-white focus-visible:border-none shadow-none px-2 font-mon text-xs text-[#1E2939] ${isNew ? "bg-green-200 border-green-300" : "border-[#E5E7EB]"}`}
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

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
}

export default function ProductCondition({ isNew }: ProductConditionProps) {
  const items = [
    { label: "true", value: "New" },
    { label: "false", value: "Not new" },
  ];

  return (
    <Select
      items={items}
      defaultValue={isNew ? items[0].value : items[1].value}
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

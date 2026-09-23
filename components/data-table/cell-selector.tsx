import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CellSelectorProps {
  initialValue: { label: string; value: unknown };
}

export default function CellSelector({ initialValue }: CellSelectorProps) {
  const sizes = [initialValue];

  return (
    <Select items={sizes} defaultValue={sizes[0].value}>
      <SelectTrigger className="w-full items-center justify-between rounded-none border-none focus-visible:border-none shadow-none px-2">
        <SelectValue />
      </SelectTrigger>
      <SelectContent alignItemWithTrigger={false}>
        <SelectGroup>
          {sizes.map((size) => (
            <SelectItem key={size.label} value={size.value}>
              {size.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

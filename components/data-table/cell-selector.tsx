import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CellSelectorProps {
  value: string;
  options: { label: string; value: string }[];
  onChange?: (value: string) => void;
}

export default function CellSelector({
  value,
  options,
  onChange,
}: CellSelectorProps) {
  return (
    <Select
      items={options}
      value={value}
      onValueChange={(nextValue) => {
        if (nextValue !== null) {
          onChange?.(nextValue);
        }
      }}
    >
      <SelectTrigger className="w-full items-center justify-between rounded-sm border-[0.5px] border-[#E5E7EB] bg-white focus-visible:border-none shadow-none px-2">
        <SelectValue />
      </SelectTrigger>
      <SelectContent alignItemWithTrigger={false}>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

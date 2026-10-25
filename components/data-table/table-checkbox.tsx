import { Checkbox } from "../ui/checkbox";

interface TableCheckboxProps {
  checked: boolean;
  indeterminate?: boolean;
  onSelect?: () => void;
}

export default function TableCheckbox({
  checked,
  indeterminate = false,
  onSelect,
}: TableCheckboxProps) {
  return (
    <div className="relative flex items-center justify-center w-full h-full px-3 border-r-[0.5px] border-black/10">
      <Checkbox onCheckedChange={onSelect} checked={checked} />

      {indeterminate && !checked && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-2.5 h-0.5 rounded-full bg-white" />
        </div>
      )}
    </div>
  );
}

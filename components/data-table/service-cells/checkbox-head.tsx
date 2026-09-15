import { TableHead } from "@/components/ui/table";
import TableCheckbox from "../table-checkbox";

interface CheckboxHeadProps {
  className?: string;
  checked: boolean;
  indeterminate?: boolean;
  onSelect?: () => void;
}

export default function CheckboxHead({
  className,
  checked,
  indeterminate,
  onSelect,
}: CheckboxHeadProps) {
  return (
    <TableHead className={`relative min-w-0 px-0 ${className ?? ""}`}>
      <TableCheckbox
        checked={checked}
        indeterminate={indeterminate}
        onSelect={onSelect}
      />
    </TableHead>
  );
}

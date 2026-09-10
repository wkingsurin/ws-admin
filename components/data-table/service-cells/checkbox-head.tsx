import { TableHead } from "@/components/ui/table";
import TableCheckbox from "../table-checkbox";

interface CheckboxHeadProps {
  checked: boolean;
  indeterminate?: boolean;
  onSelect?: () => void;
}

export default function CheckboxHead({
  checked,
  indeterminate,
  onSelect,
}: CheckboxHeadProps) {
  return (
    <TableHead className="relative min-w-0 px-0">
      <TableCheckbox
        checked={checked}
        indeterminate={indeterminate}
        onSelect={onSelect}
      />
    </TableHead>
  );
}

import { TableCell } from "@/components/ui/table";
import TableCheckbox from "../table-checkbox";

interface CheckboxCellProps {
  checked: boolean;
  onSelect: () => void;
}

export default function CheckboxCell({ checked, onSelect }: CheckboxCellProps) {
  return (
    <TableCell className="min-w-0 p-0">
      <TableCheckbox checked={checked} onSelect={onSelect} />
    </TableCell>
  );
}

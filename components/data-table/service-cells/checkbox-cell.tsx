import { TableCell } from "@/components/ui/table";
import TableCheckbox from "../table-checkbox";

interface CheckboxCellProps {
  checked: boolean;
  onSelect: () => void;
}

export default function CheckboxCell({ checked, onSelect }: CheckboxCellProps) {
  return (
    <TableCell className="min-w-0 py-2 align-middle sticky left-0 bg-white">
      <TableCheckbox checked={checked} onSelect={onSelect} />
    </TableCell>
  );
}

import { TableHead } from "@/components/ui/table";

export default function LinkHead({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <TableHead className={`min-w-0 ${className ?? ""}`}>
      {label}
    </TableHead>
  );
}

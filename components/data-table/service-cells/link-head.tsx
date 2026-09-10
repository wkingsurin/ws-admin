import { TableHead } from "@/components/ui/table";

export default function LinkHead({ label }: { label: string }) {
  return (
    <TableHead className="min-w-0 hover:bg-black/10">
      <span>{label}</span>
    </TableHead>
  );
}

import { TableHead } from "@/components/ui/table";

export default function LinkHead({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <TableHead className={`min-w-0 px-0 ${className ?? ""}`}>
      <div className="flex items-center justify-center w-full h-full border-r-[0.5px] border-black/10">{label}</div>
    </TableHead>
  );
}

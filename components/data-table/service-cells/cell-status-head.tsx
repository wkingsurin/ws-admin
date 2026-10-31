import { TableHead } from "@/components/ui/table";

interface CellStatusHead {
  className?: string;
}

export default function CellStatusHead({ className }: CellStatusHead) {
  return (
    <TableHead
      className={`sticky right-0 min-w-0 px-0 bg-[#FCFDFE] z-10 ${className ?? ""} shadow-xs`}
    >
      <div className="flex items-center justify-start w-full h-full px-2 border-l-[0.5px] border-black/10">
        Status
      </div>
    </TableHead>
  );
}

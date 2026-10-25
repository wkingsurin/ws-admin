import { TableCell } from "@/components/ui/table";
import { OrderStatus } from "@/prisma/generated/prisma/enums";

interface CellStatusProps {
  status: OrderStatus | null;
}

export default function CellStatus({ status }: CellStatusProps) {
  const style =
    status === "CANCELLED"
      ? "bg-red-500"
      : status === "DELIVERED"
        ? "bg-cyan-500"
        : status === "PAID"
          ? "bg-green-500"
          : status === "PENDING"
            ? "bg-orange-500"
            : status === "PROCESSING"
              ? "bg-yellow-500"
              : status === "SHIPPED"
                ? "bg-purple-500"
                : "";

  return (
    <TableCell className="sticky right-[50px] bg-white ">
      <div className="flex items-center justify-center w-full h-full border-l-[0.5px] border-black/10">
        <span className={`block w-2 h-2 rounded-full ${style}`} />
      </div>
    </TableCell>
  );
}

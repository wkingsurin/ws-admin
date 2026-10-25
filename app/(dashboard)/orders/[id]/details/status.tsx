import { OrderStatus } from "@/prisma/generated/prisma/enums";

export default function Status({ value }: { value: OrderStatus }) {
  const style =
    value === "CANCELLED"
      ? "bg-red-500"
      : value === "DELIVERED"
        ? "bg-cyan-500"
        : value === "PAID"
          ? "bg-green-500"
          : value === "PENDING"
            ? "bg-orange-500"
            : value === "PROCESSING"
              ? "bg-yellow-500"
              : value === "SHIPPED"
                ? "bg-purple-500"
                : "";

  return (
    <div className="flex items-center justify-center gap-1">
      <span className={`block w-2 h-2 rounded-full ${style}`} />
      <span
        className={`flex items-center justify-center h-5 rounded-sm text-[#006045] text-xs`}
      >
        {value}
      </span>
    </div>
  );
}

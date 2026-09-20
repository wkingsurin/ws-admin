import { TableCell } from "@/components/ui/table";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkCell({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  const path = usePathname();

  return (
    <TableCell className="min-w-0 p-0 hover:bg-black/10">
      <div className="flex items-center justify-center w-full h-9">
        <Link
          href={`${path}/${href}`}
          className="flex items-center w-full h-full px-2"
        >
          {label}
        </Link>
      </div>
    </TableCell>
  );
}

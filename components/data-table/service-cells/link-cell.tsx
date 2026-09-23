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
    <TableCell className="relative min-w-0 p-0 hover:bg-black/10">
      <Link
        href={`${path}/${href}`}
        className="absolute inset-0 flex items-start w-full h-full p-2"
      >
        {label}
      </Link>
    </TableCell>
  );
}

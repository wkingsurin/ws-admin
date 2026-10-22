import { TableCell } from "@/components/ui/table";
import { Eye } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkCell({ href }: { href: string }) {
  const path = usePathname();

  return (
    <TableCell className="group/page-link min-w-0 p-0 sticky left-10 bg-white">
      <Link
        href={`${path}/${href}`}
        className="absolute inset-0 flex items-center justify-center w-full h-full p-2 hover:bg-green-200 transition duration-100"
      >
        <Eye className="size-4 stroke-[1.5px] stroke-[#99A1AF] group-hover/page-link:stroke-green-700 transition duration-200" />
      </Link>
    </TableCell>
  );
}

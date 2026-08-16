import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";

export default function NavigationButton({
  direction,
}: {
  direction: "left" | "right";
}) {
  return (
    <Link href="" className="group/nav-btn flex items-center justify-center w-[30px] h-[30px] bg-white rounded-md border-[0.5px] border-black/10 hover:bg-black/50 transition duration-100">
      {direction === "left" ? (
        <MoveLeft className="size-4 stroke-[1.5px] group-hover/nav-btn:stroke-white transition duration-100" />
      ) : (
        <MoveRight className="size-4 stroke-[1.5px] group-hover/nav-btn:stroke-white transition duration-100" />
      )}
    </Link>
  );
}

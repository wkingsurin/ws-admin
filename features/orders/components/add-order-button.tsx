import { Button } from "@/components/ui/button";
import { PackagePlus } from "lucide-react";

export default function AddOrderButton() {
  return (
    <Button className="group/add-ord w-[30px] h-[30px] bg-white border-[0.5px] border-black/10 hover:bg-black/50 transition duration-100">
      <PackagePlus className="size-4 stroke-[1.5px] stroke-black group-hover/add-ord:stroke-white transition duration-100" />
    </Button>
  );
}

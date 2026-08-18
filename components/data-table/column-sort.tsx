import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

export default function ColumnSort() {
  return (
    <Button className="flex items-center justify-center w-5 h-5 rounded-sm bg-black/5 border-[0.5px] border-black/5 hover:bg-black/15 transition duration-100">
      <ChevronDown className="size-4 stroke-[1.5px] stroke-black" />
    </Button>
  );
}

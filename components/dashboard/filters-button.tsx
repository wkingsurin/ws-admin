import { FunnelPlus } from "lucide-react";
import { Button } from "../ui/button";

export default function FiltersButton() {
  return (
    <Button className="max-w-10 w-full h-10 bg-transparent hover:bg-black/10 rounded-none">
      <FunnelPlus className="size-4 stroke-[1.5px] stroke-black" />
    </Button>
  );
}

import { FunnelPlus } from "lucide-react";
import { Button } from "../ui/button";

export default function FiltersButton() {
  return (
    <Button className='w-10 h-10 bg-transparent hover:bg-black/10 border-[0.5px] border-r-black/10 rounded-none'>
      <FunnelPlus className="size-4 stroke-[1.5px] stroke-black" />
    </Button>
  );
}

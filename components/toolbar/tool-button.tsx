import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ToolButtonProps {
  icon: LucideIcon;
  onClick: () => void;
}

export default function ToolButton({ icon, onClick }: ToolButtonProps) {
  const Icon = icon;

  return (
    <Button
      className="group/add-ord w-[30px] h-[30px] bg-white border-[0.5px] border-black/10 hover:bg-black/50 transition duration-100"
      onClick={onClick}
    >
      <Icon className="size-4 stroke-[1.5px] stroke-black group-hover/add-ord:stroke-white transition duration-100" />
    </Button>
  );
}

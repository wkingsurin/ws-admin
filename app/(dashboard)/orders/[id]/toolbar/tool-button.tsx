import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ToolButtonProps {
  icon: LucideIcon;
  label: string;
  style: string;
}

export default function ToolButton({ icon, label, style }: ToolButtonProps) {
  const Icon = icon;

  return (
    <Button className={`rounded-md px-3 ${style}`}>
      <Icon className={`size-4 stroke-[1.5px]`} />
      <span>{label}</span>
    </Button>
  );
}

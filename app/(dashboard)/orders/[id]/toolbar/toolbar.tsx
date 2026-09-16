import { EyeOff, LucideIcon, SquarePen, Trash2 } from "lucide-react";
import ToolButton from "./tool-button";

export default function Toolbar() {
  const TOOLBAR_BUTTONS: { icon: LucideIcon; label: string; style: string }[] =
    [
      {
        icon: SquarePen,
        label: "Edit",
        style:
          "bg-black/10 border-[0.5px] border-black/5 text-black hover:bg-black/15",
      },
      {
        icon: EyeOff,
        label: "Hide",
        style:
          "bg-black/10 border-[0.5px] border-black/5 text-black hover:bg-black/15",
      },
      {
        icon: Trash2,
        label: "Delete",
        style:
          "bg-[#FE414A]/10 border-[0.5px] border-[#FE414A]/5 text-[#FE414A]/75 hover:bg-[#FE414A]/15 hover:text-[#FE414A]",
      },
    ];

  return (
    <div className="flex gap-2">
      {TOOLBAR_BUTTONS.map((tool) => (
        <ToolButton
          key={tool.label}
          icon={tool.icon}
          label={tool.label}
          style={tool.style}
        />
      ))}
    </div>
  );
}

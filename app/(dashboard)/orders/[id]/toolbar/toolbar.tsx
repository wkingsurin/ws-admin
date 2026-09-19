"use client";

import { EyeOff, LucideIcon, Trash2, Undo2 } from "lucide-react";
import ToolButton from "./tool-button";

export default function Toolbar() {
  const TOOLBAR_BUTTONS: {
    icon: LucideIcon;
    label: string;
    style: string;
    dialog: { title: string; notice: string };
    onClick: () => void;
  }[] = [
    {
      icon: Undo2,
      label: "Cancel",
      style:
        "bg-black/10 border-[0.5px] border-black/5 text-black hover:bg-black/15",
      dialog: {
        title: "Cancel order?",
        notice: "You`re sure? This action cannot be undo!",
      },
      onClick: () => console.log("Order cancelled!"),
    },
    {
      icon: EyeOff,
      label: "Hide",
      style:
        "bg-black/10 border-[0.5px] border-black/5 text-black hover:bg-black/15",
      dialog: {
        title: "Hide order?",
        notice: "You`re sure? This action cannot be undo!",
      },
      onClick: () => console.log("Order hidden!"),
    },
    {
      icon: Trash2,
      label: "Delete",
      style:
        "bg-[#FE414A]/10 border-[0.5px] border-[#FE414A]/5 text-[#FE414A]/75 hover:bg-[#FE414A]/15 hover:text-[#FE414A]",
      dialog: {
        title: "Delete order?",
        notice: "You`re sure? This action cannot be undo!",
      },
      onClick: () => console.log("Order deleted!"),
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
          dialog={tool.dialog}
          onClick={tool.onClick}
        />
      ))}
    </div>
  );
}

"use client";

import { LucideIcon, Undo2 } from "lucide-react";
import ToolButton from "./tool-button";

export default function Toolbar() {
  const TOOLBAR_BUTTONS: {
    icon?: LucideIcon;
    label?: string;
    style: string;
    dialog: { title: string; notice: string };
    onClick: () => void;
  }[] = [
    {
      icon: Undo2,
      label: "Cancel",
      style:
        "bg-white border-[0.5px] border-[#E5E7EB] text-black hover:bg-black/5",
      dialog: {
        title: "Cancel order?",
        notice: "This action cannot be undone! You`re sure?",
      },
      onClick: () => console.log("Order cancelled!"),
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

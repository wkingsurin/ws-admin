"use client";

import { Archive, LucideIcon, Trash2, Undo2 } from "lucide-react";
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
        "bg-white border-[0.5px] border-black/10 text-black hover:bg-black/15",
      dialog: {
        title: "Cancel order?",
        notice: "You`re sure? This action cannot be undo!",
      },
      onClick: () => console.log("Order cancelled!"),
    },
    {
      icon: Archive,
      label: "Hide",
      style:
        "bg-white border-[0.5px] border-black/10 text-black hover:bg-black/15",
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
        "bg-[#FEF2F2] border-[0.5px] border-[#FFE2E2] text-[#E7000B] hover:bg-[#FE414A]/15 hover:text-[#FE414A]",
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

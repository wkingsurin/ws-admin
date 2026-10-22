"use client";

import {
  LucideIcon,
  UserRoundCog,
} from "lucide-react";
import ToolButton from "./tool-button";

export default function Toolbar() {
  const TOOLBAR_BUTTONS: {
    id: string;
    icon: LucideIcon;
    label?: string;
    style: string;
    dialog: { title: string; notice: string };
    onClick: () => void;
  }[] = [
    {
      id: "1",
      icon: UserRoundCog,
      label: 'Edit profile',
      style:
        "bg-white border-[0.5px] border-[#E5E7EB] text-black hover:bg-black/5 hover:text-black",
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
          key={tool.id}
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

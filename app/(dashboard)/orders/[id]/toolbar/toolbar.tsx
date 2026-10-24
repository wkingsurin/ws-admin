"use client";

import { LucideIcon, Undo2 } from "lucide-react";
import cancelOrder from "../cancel-order";
import ToolButton from "./tool-button";

interface ToolbarProps {
  id: string;
}

export default function Toolbar({ id }: ToolbarProps) {
  const cancelTool = {
    id: "1",
    icon: Undo2,
    label: "Cancel",
    style:
      "bg-white border-[0.5px] border-[#E5E7EB] text-black hover:bg-black/5",
    dialog: {
      title: "Cancel order?",
      notice: "This action cannot be undone! You`re sure?",
    },
    onClick: async () => {
      await cancelOrder(id);
      console.log("Order cancelled!");
    },
  };

  const TOOLBAR_BUTTONS: {
    id: string;
    icon?: LucideIcon;
    label?: string;
    style: string;
    dialog: { title: string; notice: string };
    onClick: () => void;
  }[] = [cancelTool];

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

"use client";

import { EyeOff, LucideIcon } from "lucide-react";
import ToolButton from "./tool-button";
import toggleProductAvailability from "@/features/products/components/variants/toggle-product-availability";

interface ToolbarProps {
  id: string;
}

export default function Toolbar({ id }: ToolbarProps) {
  const TOOLBAR_BUTTONS: {
    icon: LucideIcon;
    label: string;
    style: string;
    dialog: { title: string; notice: string };
    onClick: () => void;
  }[] = [
    {
      icon: EyeOff,
      label: "Unpublish",
      style:
        "bg-white border-[0.5px] border-[#E5E7EB] text-black hover:bg-black/5! hover:text-black",
      dialog: {
        title: "Upublish product?",
        notice: "This action will remove the product from sale.",
      },
      onClick: async () => {
        await toggleProductAvailability(id);
        console.log("Order unpublished!");
      },
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

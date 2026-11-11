"use client";

import { LucideIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { useState } from "react";

interface ToolButtonProps {
  icon: LucideIcon;
  label?: string;
  dialog: (props: { onClose: () => void }) => React.ReactNode;
  className?: string;
  size?: "default" | "auto" | "md" | "lg";
}

export default function ToolButton({
  icon,
  label = "",
  className = "",
  dialog,
  size = "default",
}: ToolButtonProps) {
  const [open, setOpen] = useState(false);

  const Icon = icon;
  const sizes = {
    default: "",
    auto: "max-w-auto!",
    md: "max-w-[720px]!",
    lg: "max-w-[1024px]!",
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={`group/add-ord flex items-center justify-center gap-2 w-8 h-8 rounded-md bg-white hover:bg-black/5 border-[0.5px] border-[#E5E7EB] transition duration-100 ${className}`}
      >
        <Icon className="size-4 stroke-[1.5px] transition duration-100" />
        {label && (
          <span className="text-sm transition duration-100">{label}</span>
        )}
      </DialogTrigger>
      <DialogContent className={`${sizes[size]}`}>
        {dialog({ onClose: () => setOpen(false) })}
      </DialogContent>
    </Dialog>
  );
}

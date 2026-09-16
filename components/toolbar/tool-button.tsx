import { LucideIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { ReactNode } from "react";

interface ToolButtonProps {
  icon: LucideIcon;
  label?: string;
  children: ReactNode;
  className?: string;
  size?: "default" | "auto" | "md";
  onClick: () => void;
}

export default function ToolButton({
  icon,
  label = "",
  className = "",
  children,
  size = "default",
  onClick,
}: ToolButtonProps) {
  const Icon = icon;
  const sizes = { default: "", auto: "max-w-auto!", md: "max-w-[720px]!" };

  return (
    <Dialog>
      <DialogTrigger
        className={`group/add-ord flex items-center justify-center gap-2 w-8 h-8 rounded-md hover:bg-black/50 border-[0.5px] border-black/10 transition duration-100 ${className}`}
        onClick={onClick}
      >
        {label && (
          <span className="text-sm group-hover/add-ord:text-white transition duration-100">
            {label}
          </span>
        )}
        <Icon className="size-4 stroke-[1.5px] stroke-black group-hover/add-ord:stroke-white transition duration-100" />
      </DialogTrigger>
      <DialogContent className={`${sizes[size]}`}>{children}</DialogContent>
    </Dialog>
  );
}

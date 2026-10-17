import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type Tool = {
  label?: string;
  icon: LucideIcon;
  dialog: ReactNode;
  dialogSize?: "default" | "auto" | "md" | "lg";
  onClick: () => void;
};

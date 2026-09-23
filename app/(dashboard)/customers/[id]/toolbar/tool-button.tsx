"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LucideIcon } from "lucide-react";

interface ToolButtonProps {
  icon: LucideIcon;
  label: string;
  style: string;
  dialog: { title: string; notice: string };
  onClick: () => void;
}

export default function ToolButton({
  icon,
  label,
  style,
  dialog,
  onClick,
}: ToolButtonProps) {
  const Icon = icon;

  return (
    <Dialog>
      <DialogTrigger
        className={`flex items-center gap-2 h-8 rounded-md px-3 ${style}`}
      >
        <Icon className={`size-4 stroke-[1.5px]`} />
        <span>{label}</span>
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader>
          <span className="text-base font-medium">{dialog.title}</span>
          <p>{dialog.notice}</p>
        </DialogHeader>
        <DialogFooter>
          <DialogClose
            render={
              <Button className="px-3" variant="destructive" onClick={onClick}>
                Confirm
              </Button>
            }
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

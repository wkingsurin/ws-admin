"use client";

import DetailsData from "./details-data";
import Status from "./status";
import { DetailRow } from "../types";
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import { ReactNode } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Card from "@/components/card";

interface DetailsCardProps {
  title: string;
  status?: string;
  editable?: boolean;
  data: DetailRow[];
  editDialog?: ReactNode;
  bottom?: ReactNode;
  mode?: "light" | "dark";
}

export default function DetailsCard({
  title,
  status,
  data,
  editDialog,
  bottom,
  editable,
  mode = "light",
}: DetailsCardProps) {
  return (
    <Card
      className={`flex flex-col gap-4 justify-between w-full h-full ${mode === "light" ? "bg-white" : "bg-[#101828]!"}`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`font-bold text-sm ${mode === "light" ? "text-[#101828]" : "text-[#99A1AF]"}`}>
              {title}
            </span>
            {status && <Status label={status} />}
          </div>
          {editable && (
            <Dialog>
              <DialogTrigger
                render={
                  <Button className="group/edit h-full rounded-sm bg-transparent hover:bg-transparent">
                    <Pen className="size-4 stroke-black/50 group-hover/edit:stroke-black" />
                  </Button>
                }
              />
              <DialogContent>{editDialog}</DialogContent>
            </Dialog>
          )}
        </div>
        <DetailsData data={data} />
      </div>
      {bottom && bottom}
    </Card>
  );
}

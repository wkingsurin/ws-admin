"use client";

import { DetailRow } from "@/app/(dashboard)/orders/[id]/types";
import Card from "../../../../../components/card";
import DetailsData from "./details-data";
import Status from "./status";
import { Button } from "@/components/ui/button";
import { Check, SquarePen } from "lucide-react";
import { useState } from "react";

interface DetailsCardProps {
  title?: string;
  status?: string;
  editable?: boolean;
  data: DetailRow[];
}

export default function DetailsCard({
  title,
  status,
  data,
  editable,
}: DetailsCardProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleToggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <Card className="flex flex-col gap-3 w-1/4 h-full">
      {title && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-medium text-base">{title}</span>
            {status && <Status label={status} />}
          </div>
          {editable && (
            <Button
              className="group/edit w-6 h-6 rounded-sm bg-black/10 hover:bg-black/30"
              onClick={handleToggleEdit}
            >
              {isEditing ? (
                <Check className="size-4 stroke-black group-hover/edit:stroke-white" />
              ) : (
                <SquarePen className="size-4 stroke-black group-hover/edit:stroke-white" />
              )}
            </Button>
          )}
        </div>
      )}
      <DetailsData data={data} isEditing={isEditing} />
    </Card>
  );
}

"use client";

import DetailsData from "./details-data";
import { DetailRow } from "../types";
import { ReactNode } from "react";
import Card from "@/components/card";

interface PriceCardProps {
  title: string;
  data: DetailRow[];
  bottom?: ReactNode;
  mode?: "light" | "dark";
}

export default function PriceCard({
  title,
  data,
  bottom,
  mode = "light",
}: PriceCardProps) {
  return (
    <Card
      className={`flex flex-col gap-4 justify-between w-full h-full ${mode === "light" ? "bg-white" : "bg-[#101828]!"}`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className={`font-bold text-sm ${mode === "light" ? "text-[#101828]" : "text-[#99A1AF]"}`}
            >
              {title}
            </span>
          </div>
        </div>
        <DetailsData data={data} mode="dark" />
      </div>
      {bottom && bottom}
    </Card>
  );
}

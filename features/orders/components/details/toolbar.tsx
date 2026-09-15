"use client";

import Toolbar from "@/components/toolbar/toolbar";
import { Tool } from "@/components/toolbar/types";
import { Plus } from "lucide-react";

export default function OrderDetailsToolbar() {
  const tools: Tool[] = [
    {
      label: "Add product",
      icon: Plus,
      onClick: () => console.log("Order added"),
    },
  ];

  return <Toolbar tools={tools} />;
}

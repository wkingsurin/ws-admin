"use client";

import { useTableStore } from "@/lib/store/table.store";
import { Tool } from "@/components/toolbar/types";
import Toolbar from "@/components/toolbar/toolbar";

export default function CartToolbar() {
  const isSelected = useTableStore(
    (s) => Object.keys(s.selectedIds).length > 0,
  );

  const services: Tool[] = [];
  const tools: Tool[] = [];

  return <Toolbar serviceTools={services} tools={isSelected ? tools : []} />;
}

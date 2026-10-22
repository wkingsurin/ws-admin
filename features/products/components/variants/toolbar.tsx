"use client";

import Toolbar from "@/components/toolbar/toolbar";
import { Tool } from "@/components/toolbar/types";
import { Plus } from "lucide-react";
import AddVariantDialog, { InitialColor } from "./add-variant-dialog";
import { useTableStore } from "@/lib/store/table.store";

interface ProductToolabarProps {
  id: string;
  colors: InitialColor[];
}

export default function ProductToolbar({ id, colors }: ProductToolabarProps) {
  const isSelected = useTableStore(
    (s) => Object.keys(s.selectedIds).length > 0,
  );

  const services: Tool[] = [
    {
      label: "Add row",
      icon: Plus,
      dialog: <AddVariantDialog id={id} initialColors={colors} />,
      onClick: () => console.log("Variant added"),
    },
  ];
  const tools: Tool[] = [];

  return <Toolbar serviceTools={services} tools={isSelected ? tools : []} />;
}

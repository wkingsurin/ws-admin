"use client";

import Toolbar from "@/components/toolbar/toolbar";
import { Tool } from "@/components/toolbar/types";
import { Plus, Trash2 } from "lucide-react";
import AddVariantDialog, { InitialColor } from "./add-variant-dialog";
import DeleteVariantDialog from "./delete-variant-dialog";
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
      onClick: () => console.log("Order created"),
    },
  ];
  const tools: Tool[] = [
    {
      label: "Delete row",
      icon: Trash2,
      dialog: <DeleteVariantDialog />,
      onClick: () => console.log("Product deleted"),
    },
  ];

  return <Toolbar serviceTools={services} tools={isSelected ? tools : []} />;
}

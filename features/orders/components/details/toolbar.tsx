"use client";

import Toolbar from "@/components/toolbar/toolbar";
import { Tool } from "@/components/toolbar/types";
import { Plus, Trash2 } from "lucide-react";
import { useOrdersTableStore } from "../../store/orders";
import AddVariantDialog from "./add-product-dialog";
import DeleteVariantDialog from "./delete-product-dialog";

export default function OrderToolbar() {
  const isSelected = useOrdersTableStore(
    (s) => Object.keys(s.selectedIds).length > 0,
  );

  const services: Tool[] = [
    {
      label: "Add row",
      icon: Plus,
      dialog: <AddVariantDialog />,
      onClick: () => console.log("Variant added"),
    },
  ];
  const tools: Tool[] = [
    {
      label: "Delete row",
      icon: Trash2,
      dialog: <DeleteVariantDialog />,
      onClick: () => console.log("Variant deleted"),
    },
  ];

  return <Toolbar serviceTools={services} tools={isSelected ? tools : []} />;
}

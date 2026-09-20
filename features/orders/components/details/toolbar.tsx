"use client";

import Toolbar from "@/components/toolbar/toolbar";
import { Tool } from "@/components/toolbar/types";
import { Plus, Trash2 } from "lucide-react";
import { useOrdersTableStore } from "../../store/orders";
import AddVariantDialog from "@/features/products/components/variants/add-variant-dialog";
import DeleteVariantDialog from "@/features/products/components/variants/delete-product-dialog";

export default function VariantToolbar() {
  const isSelected = useOrdersTableStore(
    (s) => Object.keys(s.selectedIds).length > 0,
  );

  const services: Tool[] = [
    {
      label: "Add variant",
      icon: Plus,
      dialog: <AddVariantDialog />,
      onClick: () => console.log("Variant added"),
    },
  ];
  const tools: Tool[] = [
    {
      label: "Delete variant",
      icon: Trash2,
      dialog: <DeleteVariantDialog />,
      onClick: () => console.log("Variant deleted"),
    },
  ];

  return <Toolbar serviceTools={services} tools={isSelected ? tools : []} />;
}

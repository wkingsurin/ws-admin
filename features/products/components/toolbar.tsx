"use client";

import Toolbar from "@/components/toolbar/toolbar";
import { Tool } from "@/components/toolbar/types";
import { Plus, Trash2 } from "lucide-react";
import { useTableStore } from "@/lib/store/table.store";
import AddProductDialog from "./add-product-dialog";
import DeleteProductDialog from "./delete-product-dialog";

export default function ProductsToolbar() {
  const isSelected = useTableStore(
    (s) => Object.keys(s.selectedIds).length > 0,
  );

  const services: Tool[] = [
    {
      label: "Add row",
      icon: Plus,
      dialog: <AddProductDialog />,
      onClick: () => console.log("Order created"),
    },
  ];
  const tools: Tool[] = [
    {
      label: "Delete row",
      icon: Trash2,
      dialog: <DeleteProductDialog />,
      onClick: () => console.log("Order removed"),
    },
  ];

  return <Toolbar serviceTools={services} tools={isSelected ? tools : []} />;
}

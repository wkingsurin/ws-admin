"use client";

import Toolbar from "@/components/toolbar/toolbar";
import { Tool } from "@/components/toolbar/types";
import { Plus, Trash2 } from "lucide-react";
import AddProductDialog from "./add-variant-dialog";
import DeleteProductDialog from "./delete-product-dialog";
import { useOrdersTableStore } from "@/features/orders/store/orders";

export default function OrderDetailsToolbar() {
  const isSelected = useOrdersTableStore(
    (s) => Object.keys(s.selectedIds).length > 0,
  );

  const services: Tool[] = [
    {
      label: "Add variant",
      icon: Plus,
      dialog: <AddProductDialog />,
      onClick: () => console.log("Order created"),
    },
  ];
  const tools: Tool[] = [
    {
      label: "Delete product",
      icon: Trash2,
      dialog: <DeleteProductDialog />,
      onClick: () => console.log("Product deleted"),
    },
  ];

  return <Toolbar serviceTools={services} tools={isSelected ? tools : []} />;
}

"use client";

import Toolbar from "@/components/toolbar/toolbar";
import { Tool } from "@/components/toolbar/types";
import { Minus, Plus } from "lucide-react";
import { useOrdersTableStore } from "@/features/orders/store/orders";
import AddProductDialog from "./add-product-dialog";
import DeleteProductDialog from "./variants/delete-product-dialog";

export default function ProductsToolbar() {
  const isSelected = useOrdersTableStore(
    (s) => Object.keys(s.selectedIds).length > 0,
  );

  const services: Tool[] = [
    {
      label: "Add product",
      icon: Plus,
      dialog: <AddProductDialog />,
      onClick: () => console.log("Order created"),
    },
  ];
  const tools: Tool[] = [
    {
      label: "Delete",
      icon: Minus,
      dialog: <DeleteProductDialog />,
      onClick: () => console.log("Order removed"),
    },
  ];

  return <Toolbar serviceTools={services} tools={isSelected ? tools : []} />;
}

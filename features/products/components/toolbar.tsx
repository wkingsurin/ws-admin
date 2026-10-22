"use client";

import Toolbar from "@/components/toolbar/toolbar";
import { Tool } from "@/components/toolbar/types";
import { Plus } from "lucide-react";
import { useTableStore } from "@/lib/store/table.store";
import AddProductDialog from "./add-product-dialog";

interface ProductsToolbarProps {
  brands: { id: string; name: string; slug: string }[];
  categories: { id: string; name: string; slug: string }[];
}

export default function ProductsToolbar({
  brands,
  categories,
}: ProductsToolbarProps) {
  const isSelected = useTableStore(
    (s) => Object.keys(s.selectedIds).length > 0,
  );

  const services: Tool[] = [
    {
      label: "Add row",
      icon: Plus,
      dialog: <AddProductDialog brands={brands} categories={categories} />,
      dialogSize: "lg",
      onClick: () => console.log("Order created"),
    },
  ];
  const tools: Tool[] = [];

  return <Toolbar serviceTools={services} tools={isSelected ? tools : []} />;
}

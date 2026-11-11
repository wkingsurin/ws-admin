"use client";

import Toolbar from "@/components/toolbar/toolbar";
import { Tool } from "@/components/toolbar/types";
import { Plus, FunnelX } from "lucide-react";
import { useTableStore } from "@/lib/store/table.store";
import AddProductDialog from "./add-product-dialog";
import ResetFiltersDialog from "@/components/reset-filters-dialog";

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

  const hasFilters = useTableStore((s) => s.hasColumnFilters());
  const resetFilters = useTableStore((s) => s.resetFilters);

  const services: Tool[] = [
    {
      label: "Add row",
      icon: Plus,
      dialog: ({ onClose }) => (
        <AddProductDialog brands={brands} categories={categories} />
      ),
      dialogSize: "lg",
    },
  ];

  if (hasFilters) {
    services.unshift({
      label: "Reset filters",
      icon: FunnelX,
      dialog: ({ onClose }) => (
        <ResetFiltersDialog onClick={resetFilters} onClose={onClose} />
      ),
      dialogSize: "auto",
    });
  }

  const tools: Tool[] = [];

  return <Toolbar serviceTools={services} tools={isSelected ? tools : []} />;
}

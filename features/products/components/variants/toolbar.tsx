"use client";

import Toolbar from "@/components/toolbar/toolbar";
import { Tool } from "@/components/toolbar/types";
import { Plus, FunnelX } from "lucide-react";
import AddVariantDialog, { InitialColor } from "./add-variant-dialog";
import { useTableStore } from "@/lib/store/table.store";
import ResetFiltersDialog from "@/components/reset-filters-dialog";

interface ProductToolabarProps {
  id: string;
  colors: InitialColor[];
}

export default function ProductToolbar({ id, colors }: ProductToolabarProps) {
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
        <AddVariantDialog id={id} initialColors={colors} />
      ),
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

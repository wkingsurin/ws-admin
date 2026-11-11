"use client";

import { useTableStore } from "@/lib/store/table.store";
import { Tool } from "@/components/toolbar/types";
import Toolbar from "@/components/toolbar/toolbar";
import { FunnelX } from "lucide-react";
import ResetFiltersDialog from "@/components/reset-filters-dialog";

export default function CartToolbar() {
  const isSelected = useTableStore(
    (s) => Object.keys(s.selectedIds).length > 0,
  );

  const hasFilters = useTableStore((s) => s.hasColumnFilters());
  const resetFilters = useTableStore((s) => s.resetFilters);

  const services: Tool[] = [];

  if (hasFilters) {
    services.push({
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

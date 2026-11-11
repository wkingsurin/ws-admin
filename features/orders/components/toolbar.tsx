"use client";

import Toolbar from "@/components/toolbar/toolbar";
import { Tool } from "@/components/toolbar/types";
import { FunnelX, Undo2 } from "lucide-react";
import { useTableStore } from "@/lib/store/table.store";
import CancelOrderDialog from "./cancel-order-dialog";
import ResetFiltersDialog from "@/components/reset-filters-dialog";

export default function OrdersToolbar() {
  const isSelected = useTableStore(
    (s) => Object.keys(s.selectedIds).length > 0,
  );

  const resetFilters = useTableStore((s) => s.resetFilters);
  const hasFilters = useTableStore((s) => s.hasColumnFilters());

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

  const tools: Tool[] = [
    {
      label: "Cancel order",
      icon: Undo2,
      dialog: ({ onClose }) => (
        <CancelOrderDialog onClick={() => console.log('Cancelled order')} onClose={onClose} />
      ),
    },
  ];

  return <Toolbar serviceTools={services} tools={isSelected ? tools : []} />;
}

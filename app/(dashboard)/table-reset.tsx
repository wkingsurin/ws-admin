"use client";

import { useTableStore } from "@/lib/store/table.store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function TableReset() {
  const pathname = usePathname();
  const clearSelection = useTableStore((s) => s.clearSelection);
  const resetFilters = useTableStore((s) => s.resetFilters);
  const resetSort = useTableStore((s) => s.resetSort);

  useEffect(() => {
    clearSelection();
    resetFilters();
    resetSort();
  }, [pathname, clearSelection, resetFilters, resetSort]);

  return null;
}

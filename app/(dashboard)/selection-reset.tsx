"use client";

import { useTableStore } from "@/lib/store/table.store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SelectionReset() {
  const pathname = usePathname();
  const clearSelection = useTableStore((s) => s.clearSelection);

  useEffect(() => {
    clearSelection();
  }, [pathname, clearSelection]);

  return null;
}

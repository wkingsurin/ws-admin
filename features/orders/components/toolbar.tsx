"use client";

import Toolbar from "@/components/toolbar/toolbar";
import { Tool } from "@/components/toolbar/types";
import { Undo2 } from "lucide-react";
import { useTableStore } from "@/lib/store/table.store";
import CancelOrderDialog from "./cancel-order-dialog";

export default function OrdersToolbar() {
  const isSelected = useTableStore(
    (s) => Object.keys(s.selectedIds).length > 0,
  );

  const services: Tool[] = [];
  const tools: Tool[] = [
    {
      label: "Cancel order",
      icon: Undo2,
      dialog: <CancelOrderDialog />,
      onClick: () => console.log("Order cancelled"),
    },
  ];

  return <Toolbar serviceTools={services} tools={isSelected ? tools : []} />;
}

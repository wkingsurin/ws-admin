"use client";

import Toolbar from "@/components/toolbar/toolbar";
import { Tool } from "@/components/toolbar/types";
import { Trash2 } from "lucide-react";
import DeleteOrderDialog from "./delete-order-dialog";
import { useTableStore } from "@/lib/store/table.store";

export default function OrdersToolbar() {
  const isSelected = useTableStore(
    (s) => Object.keys(s.selectedIds).length > 0,
  );

  const services: Tool[] = [];
  const tools: Tool[] = [
    {
      label: "Delete row",
      icon: Trash2,
      dialog: <DeleteOrderDialog />,
      onClick: () => console.log("Order removed"),
    },
  ];

  return <Toolbar serviceTools={services} tools={isSelected ? tools : []} />;
}

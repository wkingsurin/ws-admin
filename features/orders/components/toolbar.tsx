"use client";

import Toolbar from "@/components/toolbar/toolbar";
import { Tool } from "@/components/toolbar/types";
import { PackageMinus, PackagePlus } from "lucide-react";
import { useOrdersTableStore } from "../store/orders";
import CreateOrderDialog from "./create-order-dialog";
import DeleteOrderDialog from "./delete-order-dialog";

export default function OrdersToolbar() {
  const isSelected = useOrdersTableStore(
    (s) => Object.keys(s.selectedIds).length > 0,
  );

  const services: Tool[] = [
    {
      label: "Create order",
      icon: PackagePlus,
      dialog: <CreateOrderDialog />,
      onClick: () => console.log("Order created"),
    },
  ];
  const tools: Tool[] = [
    {
      label: "Delete order",
      icon: PackageMinus,
      dialog: <DeleteOrderDialog />,
      onClick: () => console.log("Order removed"),
    },
  ];

  return <Toolbar serviceTools={services} tools={isSelected ? tools : []} />;
}

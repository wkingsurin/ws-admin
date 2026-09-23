"use client";

import Toolbar from "@/components/toolbar/toolbar";
import { Tool } from "@/components/toolbar/types";
import { Minus, Plus } from "lucide-react";
import { useOrdersTableStore } from "@/features/orders/store/orders";
import DeleteCustomersDialog from "./delete-customers-dialog";
import AddCustomersDialog from "./add-customers-dialog";

export default function CustomersToolbar() {
  const isSelected = useOrdersTableStore(
    (s) => Object.keys(s.selectedIds).length > 0,
  );

  const services: Tool[] = [
    {
      label: "Add customer",
      icon: Plus,
      dialog: <AddCustomersDialog />,
      onClick: () => console.log("Customer created"),
    },
  ];
  const tools: Tool[] = [
    {
      label: "Delete",
      icon: Minus,
      dialog: <DeleteCustomersDialog />,
      onClick: () => console.log("Customer removed"),
    },
  ];

  return <Toolbar serviceTools={services} tools={isSelected ? tools : []} />;
}

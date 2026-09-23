"use client";

import { Plus, Trash2 } from "lucide-react";
import AddCustomerDialog from "../add-customers-dialog";
import DeleteCustomersDialog from "../delete-customers-dialog";
import { useOrdersTableStore } from "@/features/orders/store/orders";
import { Tool } from "@/components/toolbar/types";
import Toolbar from "@/components/toolbar/toolbar";

export default function CartToolbar() {
  const isSelected = useOrdersTableStore(
    (s) => Object.keys(s.selectedIds).length > 0,
  );

  const services: Tool[] = [
    {
      label: "Add item",
      icon: Plus,
      dialog: <AddCustomerDialog />,
      onClick: () => console.log("Item added"),
    },
  ];
  const tools: Tool[] = [
    {
      label: "Delete item",
      icon: Trash2,
      dialog: <DeleteCustomersDialog />,
      onClick: () => console.log("Item deleted"),
    },
  ];

  return <Toolbar serviceTools={services} tools={isSelected ? tools : []} />;
}

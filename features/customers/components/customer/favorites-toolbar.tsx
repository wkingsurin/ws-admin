"use client";

import Toolbar from "@/components/toolbar/toolbar";
import { Tool } from "@/components/toolbar/types";
import { Plus, Trash2 } from "lucide-react";
import { useOrdersTableStore } from "@/features/orders/store/orders";
import AddCustomerDialog from "../add-customers-dialog";
import DeleteCustomersDialog from "../delete-customers-dialog";

export default function FavoritesToolbar() {
  const isSelected = useOrdersTableStore(
    (s) => Object.keys(s.selectedIds).length > 0,
  );

  const services: Tool[] = [
    {
      label: "Add favorite",
      icon: Plus,
      dialog: <AddCustomerDialog />,
      onClick: () => console.log("Favorite created"),
    },
  ];
  const tools: Tool[] = [
    {
      label: "Delete favorite",
      icon: Trash2,
      dialog: <DeleteCustomersDialog />,
      onClick: () => console.log("Favorite deleted"),
    },
  ];

  return <Toolbar serviceTools={services} tools={isSelected ? tools : []} />;
}

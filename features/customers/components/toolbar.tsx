"use client";

import Toolbar from "@/components/toolbar/toolbar";
import { Tool } from "@/components/toolbar/types";
import { Plus, Trash2 } from "lucide-react";
import { useTableStore } from "@/lib/store/table.store";
import DeleteCustomersDialog from "./delete-customers-dialog";
import AddCustomersDialog from "./add-customers-dialog";

export default function CustomersToolbar() {
  const isSelected = useTableStore(
    (s) => Object.keys(s.selectedIds).length > 0,
  );

  const services: Tool[] = [
    {
      label: "Add row",
      icon: Plus,
      dialog: <AddCustomersDialog />,
      onClick: () => console.log("Customer created"),
    },
  ];
  const tools: Tool[] = [
    {
      label: "Delete row",
      icon: Trash2,
      dialog: <DeleteCustomersDialog />,
      onClick: () => console.log("Customer removed"),
    },
  ];

  return <Toolbar serviceTools={services} tools={isSelected ? tools : []} />;
}

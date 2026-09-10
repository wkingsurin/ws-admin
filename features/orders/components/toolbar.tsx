import Toolbar from "@/components/toolbar/toolbar";
import { Tool } from "@/components/toolbar/types";
import { PackageMinus, PackagePlus } from "lucide-react";

export default function OrdersToolbar() {
  const tools: Tool[] = [
    {
      label: "Add order",
      icon: PackagePlus,
      onClick: () => console.log("Order added"),
    },
    {
      label: "Remove order",
      icon: PackageMinus,
      onClick: () => console.log("Order removed"),
    },
  ];

  return <Toolbar tools={tools} />;
}

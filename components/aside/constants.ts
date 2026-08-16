import {
  Boxes,
  CircleUserRound,
  LogOut,
  LucideIcon,
  UsersRound,
  Warehouse,
} from "lucide-react";

export const DASHBOARD_NAVIGATION: {
  label: string;
  icon: LucideIcon;
  href: string;
}[] = [
  { label: "Orders", icon: Boxes, href: "/orders" },
  { label: "Catalog", icon: Warehouse, href: "/catalog" },
  { label: "Clients", icon: UsersRound, href: "/clients" },
];
export const ACCOUNT: {
  label: string;
  icon: LucideIcon;
  href: string;
}[] = [
  { label: "Account", icon: CircleUserRound, href: "/account" },
  { label: "Log out", icon: LogOut, href: "/" },
];

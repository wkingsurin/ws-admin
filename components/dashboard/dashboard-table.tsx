import { ReactNode } from "react";
import ActionsBar from "./actions-bar";

export default function DashboardTable({
  toolbar,
  children,
  className,
}: {
  toolbar?: ReactNode;
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div className={`flex flex-col min-h-0 ${className ?? ""}`}>
      <ActionsBar>{toolbar}</ActionsBar>

      <div className="flex-1 min-h-0">{children}</div>
    </div>
  );
}

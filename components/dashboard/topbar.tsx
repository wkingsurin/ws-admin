import { ReactNode } from "react";
import Navigation from "./navigation";

export default function TopBar({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3">
      <Navigation />
      {children}
    </div>
  );
}

import { ReactNode } from "react";
import SearchBar from "./search";

export default function ActionsBar({ children }: { children?: ReactNode }) {
  return (
    <div className="flex items-center gap-3 w-full bg-[#FCFDFE] rounded-[18px_18px_0_0] border-l-[0.5px] border-t-[0.5px] border-r-[0.5px] border-black/10 p-3 overflow-hidden">
      <SearchBar />
      {children}
    </div>
  );
}

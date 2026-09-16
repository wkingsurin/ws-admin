import FiltersButton from "./filters-button";
import { ReactNode } from "react";
import SearchBar from "./search";

export default function ActionsBar({ children }: { children?: ReactNode }) {
  return (
    <div className="flex items-center gap-3 pr-1 min-h-10 h-10 overflow-hidden">
      <div className="flex max-w-[720px] w-full bg-white rounded-[8px_8px_0_0] border-t-[0.5px] border-l-[0.5px] border-r-[0.5px] border-black/10 overflow-hidden">
        <FiltersButton />
        <SearchBar />
      </div>
      {children}
    </div>
  );
}

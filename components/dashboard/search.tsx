import { Search } from "lucide-react";
import { Input } from "../ui/input";
import FiltersButton from "./filters-button";

export default function SearchBar() {
  return (
    <div className="flex items-center h-10 bg-white rounded-[8px_8px_0_0] border-[0.5px] border-black/10 overflow-hidden">
      <FiltersButton />
      <div className="flex items-center gap-2 w-full px-3">
        <Search className="size-4 stroke-[1.5px] stroke-black/50" />
        <Input placeholder="Search by: id / orderNumber / userId / price" />
      </div>
    </div>
  );
}

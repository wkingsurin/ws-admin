import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function SearchBar() {
  return (
    <div className="flex items-center justify-center gap-2 max-w-[480px] w-full px-3 min-h-8 h-8 bg-white border-[0.5px] rounded-md">
      <Search className="size-4 stroke-[1.5px] stroke-black/50" />
      <Input placeholder="Search by: id / orderNumber / userId / price" />
    </div>
  );
}

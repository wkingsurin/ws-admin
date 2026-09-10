import { ArrowDown, ArrowUp, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DataTableColumn, SortDirection } from "./types";
import CheckboxFilter from "./checkbox-filter";

interface ColumnActionsProps<T> {
  column: DataTableColumn<T>;
  selectedFilters: string[];
  onFilterChange: (value: string, checked: boolean) => void;
  sortDirection: SortDirection | null;
  onSort: (direction: SortDirection) => void;
}

export default function ColumnActions<T>({
  column,
  selectedFilters,
  onFilterChange,
  sortDirection,
  onSort,
}: ColumnActionsProps<T>) {
  const hasActiveFilters = selectedFilters.length > 0;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group/filters flex items-center justify-center w-5 h-7 rounded-sm bg-black/10 hover:bg-card transition duration-100">
        <ChevronDown className="size-4 stroke-black" />
        {hasActiveFilters && (
          <span className="absolute top-1 right-1 size-1 rounded-full bg-black" />
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className={`group/item ${sortDirection === "asc" ? "bg-black/10" : ""}`}
          onClick={() => onSort("asc")}
        >
          <span
            className={`${sortDirection === "asc" ? "text-black" : "text-black/50 group-hover/item:text-black"}`}
          >
            Ascending
          </span>
          <span className="absolute right-2">
            <ArrowUp
              className={`size-4 stroke-[1.5px] ${sortDirection === "asc" ? "stroke-black" : "stroke-black/50 group-hover/item:stroke-black"}`}
            />
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`group/item ${sortDirection === "desc" ? "bg-black/10" : ""}`}
          onClick={() => {
            onSort("desc");
          }}
        >
          <span
            className={`${sortDirection === "desc" ? "text-black" : "text-black/50 group-hover/item:text-black"}`}
          >
            Descending
          </span>
          <span className="absolute right-2">
            <ArrowDown
              className={`size-4 stroke-[1.5px] ${sortDirection === "desc" ? "stroke-black" : "stroke-black/50 group-hover/item:stroke-black"}`}
            />
          </span>
        </DropdownMenuItem>

        {column.filter?.type === "checkbox" && (
          <>
            <DropdownMenuSeparator />

            <CheckboxFilter
              filter={column.filter}
              selectedFilters={selectedFilters}
              onCheckedChange={onFilterChange}
            />
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

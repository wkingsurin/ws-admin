"use client";

import { DataTableFilter } from "./types";
import { DropdownMenuCheckboxItem } from "../ui/dropdown-menu";

interface CheckboxFilterProps {
  filter: Extract<DataTableFilter, { type: "checkbox" }>;
  selectedFilters: string[];
  onCheckedChange: (value: string, checked: boolean) => void;
}

export default function CheckboxFilter({
  filter,
  selectedFilters,
  onCheckedChange,
}: CheckboxFilterProps) {
  return (
    <>
      {filter.options.map((option) => {
        const checked = selectedFilters.includes(option.value);

        return (
          <DropdownMenuCheckboxItem
            key={option.value}
            checked={checked}
            onCheckedChange={(checked) =>
              onCheckedChange(option.value, checked)
            }
            className={`text-black/50 group-hover/item:text-black ${checked && "text-black bg-black/10"}`}
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        );
      })}
    </>
  );
}

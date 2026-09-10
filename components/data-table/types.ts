import { ReactNode } from "react";

export type SortDirection = "asc" | "desc";

export interface SortState {
  columnId: string | null;
  direction: SortDirection | null;
}

export type ColumnWidths = Record<string, number>;
export type ColumnFilters = Record<string, string[]>;

export type DataTableFilter =
  | { type: "text" }
  | { type: "checkbox"; options: { label: string; value: string }[] };

export interface DataTableColumn<T> {
  id: string;
  header: ReactNode;

  accessorKey?: keyof T;

  initialWidth?: number;
  minWidth?: number;
  maxWidth?: number;

  render?: (row: T) => ReactNode;

  copyable?: boolean;
  editable?: boolean;

  filter?: DataTableFilter;
}

export interface DataTableProps<T> {
  data: T[];
  columns: DataTableColumn<T>[];

  getRowId: (row: T) => string;
  selectedIds: Record<string, true>;
  onToggleRow: (id: string) => void;
  toggleAll: (rowIds: string[]) => void;
}

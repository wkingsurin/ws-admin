import { OrderStatus } from "@/prisma/generated/prisma/enums";
import { ReactNode } from "react";

export type SortDirection = "asc" | "desc";

export interface SortState {
  columnId: string | null;
  direction: SortDirection | null;
}

export type ColumnWidths = Record<string, number>;
export type ColumnFilters = Record<string, string[]>;

export type DataTableFilterOption = {
  label: string;
  value: string;
};
export type DataTableFilter<TRow = unknown> =
  | { type: "text" }
  | {
      type: "checkbox";
      options:
        | DataTableFilterOption[]
        | ((data: TRow[]) => DataTableFilterOption[]);
    };

export interface DataTableCellContext {
  onSave: (value: string) => void | Promise<void>;
}

export interface DataTableColumn<T> {
  id: string;
  header: ReactNode;

  accessorKey?: keyof T;
  accessor?: (row: T) => unknown;

  initialWidth?: number;
  minWidth?: number;
  maxWidth?: number;

  maxSymbols?: number;
  multiline?: boolean;

  render?: (row: T, context?: DataTableCellContext) => ReactNode;

  copyable?: boolean;
  editable?: boolean;

  filter?: DataTableFilter<T>;

  className?: string;

  onSave?: (row: T, value: string) => void;

  editor?: "text" | "custom";
}

export interface DataTableProps<T> {
  data: T[];
  columns: DataTableColumn<T>[];

  getRowId: (row: T) => string;
  getRowStatus?: (row: T) => OrderStatus;
  selectedIds: Record<string, true>;
  onToggleRow: (id: string) => void;
  toggleAll: (rowIds: string[]) => void;

  pageCell?: boolean;
  statusCell?: boolean;
}

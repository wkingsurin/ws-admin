import { ReactNode } from "react";

export interface DataTableColumn<T> {
  id: string;
  header: ReactNode;

  accessorKey?: keyof T;

  initialWidth?: number;
  minWidth?: number;
  maxWidth?: number;

  render?: (row: T) => ReactNode;
}

export interface DataTableProps<T> {
  data: T[];
  columns: DataTableColumn<T>[];
}

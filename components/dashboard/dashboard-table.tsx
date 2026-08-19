import DataTable from "../data-table/data-table";
import { DataTableColumn } from "../data-table/types";
import SearchBar from "./search";

interface DashboardTableProps<T> {
  data: T[];
  columns: DataTableColumn<T>[];
}

export default function DashboardTable<T>({
  data,
  columns,
}: DashboardTableProps<T>) {
  return (
    <div className="flex flex-col">
      <SearchBar />
      <DataTable data={data} columns={columns} />
    </div>
  );
}

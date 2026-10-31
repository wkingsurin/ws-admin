"use client";

import { useEffect, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  ColumnFilters,
  ColumnWidths,
  DataTableColumn,
  DataTableProps,
  SortState,
} from "./types";
import DataTableResizer from "./data-table-resizer";
import LinkCell from "./service-cells/link-cell";
import CheckboxCell from "./service-cells/checkbox-cell";
import LinkHead from "./service-cells/link-head";
import CheckboxHead from "./service-cells/checkbox-head";
import ColumnActions from "./column-actions";
import Cell from "./cell";
import CellStatus from "./service-cells/cell-status";
import CellStatusHead from "./service-cells/cell-status-head";
import normalizeFilterValue from "@/features/shared/normalizeFilterValue";
import { useTableSearch } from "../dashboard/search-context";

export default function DataTable<T>({
  data,
  columns,
  getRowId,
  getRowStatus,
  selectedIds,
  toggleAll,
  onToggleRow,
  pageCell = true,
  statusCell = false,
}: DataTableProps<T>) {
  const [pressedCtrl, setPressedCtrl] = useState<boolean>(false);

  const { searchQuery } = useTableSearch();

  const searchableColumns = columns.filter((column) => column.searchable);
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const searchedData = data.filter((row) => {
    if (!normalizedQuery) return true;

    return searchableColumns.some((column) => {
      const value = getColumnValue(column, row);

      if (
        typeof value !== "string" &&
        typeof value !== "number" &&
        typeof value !== "boolean"
      ) {
        return false;
      }

      return String(value).toLowerCase().includes(normalizedQuery);
    });
  });

  const [sort, setSort] = useState<SortState>({
    columnId: null,
    direction: null,
  });
  const [columnFilters, setColumnFilters] = useState<ColumnFilters>({});
  const [columnWidths, setColumnWidths] = useState<ColumnWidths>(() =>
    Object.fromEntries(
      columns.map((column) => {
        const minWidth = column.minWidth ?? 80;
        const maxWidth = column.maxWidth ?? Infinity;
        const initialWidth = column.initialWidth ?? 150;

        return [
          column.id,
          Math.min(maxWidth, Math.max(minWidth, initialWidth)),
        ];
      }),
    ),
  );

  const defaultTableWidth = Object.values(columnWidths).reduce(
    (sum, width) => sum + width,
    0,
  );
  let tableWidth =
    pageCell && statusCell
      ? 40 + 50 + 60 + defaultTableWidth
      : pageCell || statusCell
        ? 40 + 50 + defaultTableWidth
        : 40 + defaultTableWidth;

  const tableScrollRef = useRef<HTMLDivElement>(null);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const horizontalContentRef = useRef<HTMLDivElement>(null);

  const handleResizeStart = (event: React.PointerEvent, columnId: string) => {
    const startX = event.clientX;
    const startWidth = columnWidths[columnId];

    const column = columns.find((column) => column.id === columnId);

    if (!column) return;

    const handlePointerMove = (event: PointerEvent) => {
      const delta = event.clientX - startX;

      const minWidth = column.minWidth ?? 80;
      const maxWidth = column.maxWidth ?? Infinity;

      const newWidth = Math.min(
        maxWidth,
        Math.max(minWidth, startWidth + delta),
      );

      setColumnWidths((prev) => ({
        ...prev,
        [columnId]: newWidth,
      }));
    };

    const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  const filteredData = [...searchedData].filter((row) => {
    return columns.every((column) => {
      const selectedFilters = columnFilters[column.id] ?? [];

      if (selectedFilters.length === 0) return true;

      const value = normalizeFilterValue(getColumnValue(column, row));

      return selectedFilters.includes(String(value ?? ""));
    });
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sort.columnId || !sort.direction) return 0;

    const column = columns.find((column) => column.id === sort.columnId);

    if (!column) return 0;

    const aValue = getColumnValue(column, a);
    const bValue = getColumnValue(column, b);

    if (aValue == null) return 1;
    if (bValue == null) return -1;

    if (aValue < bValue) {
      return sort.direction === "asc" ? -1 : 1;
    }

    if (bValue < aValue) {
      return sort.direction === "asc" ? 1 : -1;
    }

    return 0;
  });
  const rowIds = sortedData.map(getRowId);

  const selectedCount = rowIds.filter((id) => selectedIds[id]).length;
  const allSelected =
    rowIds.length > 0 && rowIds.every((id) => selectedIds[id]);
  const someSelected =
    selectedCount > 0 && rowIds.some((id) => selectedIds[id]) && !allSelected;

  const onDownCtrl = (event: KeyboardEvent) => {
    if (event.ctrlKey) {
      setPressedCtrl(true);
    }
  };
  const onUpCtrl = () => {
    setPressedCtrl(false);
  };

  function getColumnValue(column: DataTableColumn<T>, row: T) {
    if (column.accessor) {
      return column.accessor(row);
    }

    if (column.accessorKey) {
      return row[column.accessorKey];
    }

    return undefined;
  }

  useEffect(() => {
    const tableScroll = tableScrollRef.current;
    const horizontalScroll = horizontalScrollRef.current;

    if (!tableScroll || !horizontalScroll) return;

    const handleTableScroll = () => {
      horizontalScroll.scrollLeft = tableScroll.scrollLeft;
    };

    const handleHorizontalScroll = () => {
      tableScroll.scrollLeft = horizontalScroll.scrollLeft;
    };

    tableScroll.addEventListener("scroll", handleTableScroll);
    horizontalScroll.addEventListener("scroll", handleHorizontalScroll);

    return () => {
      tableScroll.removeEventListener("scroll", handleTableScroll);
      horizontalScroll.removeEventListener("scroll", handleHorizontalScroll);
    };
  }, []);

  useEffect(() => {
    window.document.addEventListener("keydown", onDownCtrl);
    window.document.addEventListener("keyup", onUpCtrl);

    return () => {
      window.document.removeEventListener("keydown", onDownCtrl);
      window.document.removeEventListener("keyup", onUpCtrl);
    };
  }, []);

  return (
    <div className="flex flex-col min-w-0 h-full min-h-0">
      <div
        className="flex-1 min-h-0 min-w-0 border-[0.5px] border-black/10 overflow-auto"
        ref={tableScrollRef}
      >
        <Table
          className="table-fixed w-max"
          style={{ width: `${tableWidth}px` }}
        >
          <colgroup>
            <col style={{ width: "40px" }} />
            {pageCell && <col style={{ width: "50px" }} />}

            {columns.map((column) => (
              <col
                key={column.id}
                style={{
                  width: `${columnWidths[column.id]}px`,
                }}
              />
            ))}

            {statusCell && <col style={{ width: "60px" }} />}
          </colgroup>

          <TableHeader className="sticky top-0 z-10 bg-[#FCFDFE] shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
            <TableRow className="relative">
              <CheckboxHead
                checked={allSelected}
                indeterminate={someSelected}
                onSelect={() => toggleAll(rowIds)}
              />
              {pageCell && (
                <LinkHead
                  label="page"
                  className="sticky left-10 bg-[#FCFDFE] z-10 uppercase bold font-mono text-[12px] text-[#99A1AF] leading-[100%] text-center"
                />
              )}

              {columns.map((column) => (
                <TableHead
                  key={column.id}
                  className="relative min-w-0 bg-gray uppercase bold font-mono text-[12px] text-[#99A1AF]"
                >
                  <div className="flex items-center justify-between gap-3 w-full">
                    <span className="min-w-0 truncate leading-[100%]">
                      {column.header}
                    </span>
                    <ColumnActions
                      column={column}
                      data={data}
                      selectedFilters={columnFilters[column.id] ?? []}
                      onFilterChange={(value, checked) => {
                        const normalizedValue = normalizeFilterValue(value);

                        setColumnFilters((prev) => {
                          const current = prev[column.id] ?? [];

                          return {
                            ...prev,
                            [column.id]: checked
                              ? current.includes(normalizedValue)
                                ? current
                                : [...current, normalizedValue]
                              : current.filter(
                                  (item) => item !== normalizedValue,
                                ),
                          };
                        });
                      }}
                      sortDirection={
                        sort?.columnId === column.id ? sort.direction : null
                      }
                      onSort={(direction) => {
                        setSort({ columnId: column.id, direction });
                      }}
                    />
                  </div>

                  <DataTableResizer
                    onPointerDown={(event) =>
                      handleResizeStart(event, column.id)
                    }
                  />
                </TableHead>
              ))}

              {statusCell && (
                <CellStatusHead className="bg-[#FCFDFE] uppercase bold font-mono text-[12px] text-[#99A1AF] leading-[100%] text-center" />
              )}
            </TableRow>
          </TableHeader>

          <TableBody>
            {sortedData.map((row) => {
              const rowId = getRowId(row);
              const status = getRowStatus ? getRowStatus(row) : null;

              return (
                <TableRow
                  key={rowId}
                  className="relative bg-white hover:bg-[#F9FAFB]/80 text-xs"
                >
                  <CheckboxCell
                    checked={selectedIds[rowId] === true}
                    onSelect={() => onToggleRow(rowId)}
                  />
                  {pageCell && <LinkCell href={`/${rowId}`} />}

                  {columns.map((column) => {
                    const value = getColumnValue(column, row);

                    if (column.editor === "custom") {
                      return (
                        <TableCell key={column.id} className={column.className}>
                          {column.render?.(row, {
                            onSave: (value: string) =>
                              column.onSave?.(row, value),
                          })}
                        </TableCell>
                      );
                    }

                    return (
                      <Cell
                        key={column.id}
                        editValue={value == null ? "" : String(value)}
                        className={column.className}
                        hovered={pressedCtrl}
                        onSave={(value) => column.onSave?.(row, value)}
                        editable={column.editable ?? false}
                        maxSymbols={column.maxSymbols}
                      >
                        {column.render
                          ? column.render(row)
                          : value == null
                            ? ""
                            : String(value)}
                      </Cell>
                    );
                  })}

                  {statusCell && status && <CellStatus status={status} />}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <div
        className="absolute h-4 shrink-0 overflow-x-auto overflow-y-hidden"
        ref={horizontalScrollRef}
      >
        <div
          className="h-full"
          style={{ width: "max-content", minWidth: "100%" }}
          ref={horizontalContentRef}
        ></div>
      </div>
    </div>
  );
}

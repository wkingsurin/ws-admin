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
  DataTableProps,
  SortState,
} from "./types";
import DataTableResizer from "./data-table-resizer";
import LinkCell from "./service-cells/link-cell";
import CheckboxCell from "./service-cells/checkbox-cell";
import LinkHead from "./service-cells/link-head";
import CheckboxHead from "./service-cells/checkbox-head";
import ColumnActions from "./column-actions";
import CellValue from "./cell-value";

export default function DataTable<T>({
  data,
  columns,
  getRowId,
  selectedIds,
  toggleAll,
  onToggleRow,
}: DataTableProps<T>) {
  const [pressedCtrl, setPressedCtrl] = useState<boolean>(false);

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

  const sortedData = [...data].sort((a, b) => {
    if (!sort) return 0;

    const column = columns.find((column) => column.id === sort.columnId);

    if (!column?.accessorKey) return 0;

    const aValue = a[column.accessorKey];
    const bValue = b[column.accessorKey];

    if (aValue == null || bValue == null) return 0;
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

  const handleCopy = async (event: React.MouseEvent): Promise<void> => {
    const value = event.currentTarget.textContent;

    try {
      await navigator.clipboard.writeText(value);
      console.log(`Text is copied!`);
    } catch (err) {
      console.error(`Failed to copy text:`, value);
    }
  };

  const onDownCtrl = (event: KeyboardEvent) => {
    if (event.ctrlKey) {
      setPressedCtrl(true);
    }
  };
  const onUpCtrl = (event: KeyboardEvent) => {
    setPressedCtrl(false);
  };

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
        className="flex-1 min-h-0 min-w-0 overflow-auto"
        ref={tableScrollRef}
      >
        <Table className="table-fixed whitespace-nowrap">
          <colgroup>
            <col style={{ width: "40px" }} />
            <col style={{ width: "80px" }} />

            {columns.map((column) => (
              <col
                key={column.id}
                style={{
                  width: `${columnWidths[column.id]}px`,
                }}
              />
            ))}
          </colgroup>

          <TableHeader className="sticky top-0 z-10 bg-[#F8F9FA]">
            <TableRow>
              <CheckboxHead
                checked={allSelected}
                indeterminate={someSelected}
                onSelect={() => toggleAll(rowIds)}
              />
              <LinkHead label="page" />

              {columns.map((column) => (
                <TableHead
                  key={column.id}
                  className="relative min-w-0 bg-gray hover:bg-black/10"
                >
                  <div className="flex items-center justify-between gap-3 w-full">
                    <span className="min-w-0 truncate text-black/75">
                      {column.header}
                    </span>
                    <ColumnActions
                      column={column}
                      selectedFilters={columnFilters[column.id] ?? []}
                      onFilterChange={(value, checked) => {
                        setColumnFilters((prev) => {
                          const current = prev[column.id] ?? [];

                          return {
                            ...prev,
                            [column.id]: checked
                              ? [...current, value]
                              : current.filter((item) => item !== value),
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
            </TableRow>
          </TableHeader>

          <TableBody>
            {sortedData.map((row) => {
              const rowId = getRowId(row);

              return (
                <TableRow key={rowId}>
                  <CheckboxCell
                    checked={selectedIds[rowId] === true}
                    onSelect={() => onToggleRow(rowId)}
                  />
                  <LinkCell label="View" />

                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      className="min-w-0 truncate hover:bg-black/10 cursor-copy"
                      onClick={handleCopy}
                    >
                      <CellValue
                        value={
                          column.render
                            ? column.render(row)
                            : column.accessorKey
                              ? String(row[column.accessorKey])
                              : null
                        }
                        visible={pressedCtrl}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <div
        className="h-4 shrink-0 overflow-x-auto overflow-y-hidden"
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

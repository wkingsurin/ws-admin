import { ColumnFilters, SortState } from "@/components/data-table/types";
import { create } from "zustand";

type TableState = {
  selectedIds: Record<string, true>;
  columnFilters: ColumnFilters;
  sort: SortState;

  toggleRow: (id: string) => void;
  toggleAll: (ids: string[]) => void;

  removeRows: (ids: string[]) => void;
  archiveRows: (ids: string[]) => void;

  clearSelection: () => void;

  setColumnFilters: (
    data: ColumnFilters | ((prev: ColumnFilters) => ColumnFilters),
  ) => void;
  updateColumnFilter: (
    columnId: string,
    value: string,
    checked: boolean,
  ) => void;

  resetColumnFilter: (columnId: string) => void;
  resetFilters: () => void;

  setSort: (sort: SortState) => void;
  resetSort: () => void;

  hasColumnFilters: () => boolean;
};

export const useTableStore = create<TableState>((set, get) => ({
  selectedIds: {},
  columnFilters: {},
  sort: {
    columnId: null,
    direction: null,
  },

  toggleRow: (id) =>
    set((state) => {
      const nextIds = { ...state.selectedIds };

      if (nextIds[id]) {
        delete nextIds[id];
      } else {
        nextIds[id] = true;
      }

      return { selectedIds: nextIds };
    }),

  toggleAll: (ids: string[]) =>
    set((state) => {
      const allSelected =
        ids.length > 0 && ids.every((id) => state.selectedIds[id]);

      const nextIds = { ...state.selectedIds };

      if (allSelected) {
        ids.forEach((id) => delete nextIds[id]);
      } else {
        ids.forEach((id) => (nextIds[id] = true));
      }

      return { selectedIds: nextIds };
    }),

  removeRows: (ids) =>
    set((state) => {
      const nextIds = { ...state.selectedIds };

      ids.forEach((id) => delete nextIds[id]);
      console.log(`removed rows: ${ids}`);

      return { selectedIds: nextIds };
    }),

  archiveRows: (ids) =>
    set((state) => {
      const nextIds = { ...state.selectedIds };

      ids.forEach((id) => delete nextIds[id]);
      console.log(`archived rows: ${ids}`);

      return { selectedIds: nextIds };
    }),

  clearSelection: () => set({ selectedIds: {} }),

  setColumnFilters: (data) =>
    set((state) => ({
      columnFilters:
        typeof data === "function" ? data(state.columnFilters) : data,
    })),

  updateColumnFilter: (columndId, value, checked) =>
    set((state) => {
      const current = state.columnFilters[columndId] ?? [];

      return {
        columnFilters: {
          ...state.columnFilters,
          [columndId]: checked
            ? current.includes(value)
              ? current
              : [...current, value]
            : current.filter((item) => item !== value),
        },
      };
    }),

  resetColumnFilter: (columnId) =>
    set((state) => ({
      columnFilters: { ...state.columnFilters, [columnId]: [] },
    })),

  resetFilters: () => set({ columnFilters: {} }),

  setSort: (sort) => set({ sort }),

  resetSort: () => set({ sort: { columnId: null, direction: null } }),

  hasColumnFilters: () => {
    return Object.values(get().columnFilters).some(
      (filters) => filters.length > 0,
    );
  },
}));

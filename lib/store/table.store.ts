import { create } from "zustand";

type TableState = {
  selectedIds: Record<string, true>;

  toggleRow: (id: string) => void;
  toggleAll: (ids: string[]) => void;

  removeRows: (ids: string[]) => void;
  archiveRows: (ids: string[]) => void;

  clearSelection: () => void;
};

export const useTableStore = create<TableState>((set) => ({
  selectedIds: {},

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
}));

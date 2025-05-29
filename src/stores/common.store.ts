import { create } from "zustand";
import { immer } from "zustand/middleware/immer"; // Thêm dòng này

type State = {
  count: number;
  tokenAccess: string;
  reFreshToken: string;
};

type Actions = {
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
};

export const useCountStore = create<State & Actions>()(
  immer((set) => ({
    count: 100,
    tokenAccess: "",
    reFreshToken: "",
    increment: (qty: number) =>
      set((state) => {
        state.count += qty;
      }),
    decrement: (qty: number) =>
      set((state) => {
        state.count -= qty;
      }),
  }))
);

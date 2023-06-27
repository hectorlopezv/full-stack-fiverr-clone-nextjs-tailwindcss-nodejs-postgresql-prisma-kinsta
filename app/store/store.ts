import { devtools } from 'zustand/middleware';
import { create, StateCreator } from 'zustand';
import { immer } from 'zustand/middleware/immer';
interface BearSlice {
  bears: number;
  addBear: () => void;
  eatFish: () => void;
}
const createBearSlice: StateCreator<
  BearSlice & FishSlice,
  [],
  [],
  BearSlice
> = set => ({
  bears: 0,
  addBear: () => set(state => ({ bears: state.bears + 1 })),
  eatFish: () => set(state => ({ fishes: state.fishes - 1 }))
});

interface FishSlice {
  fishes: number;
  addFish: () => void;
}
const createFishSlice: StateCreator<
  BearSlice & FishSlice,
  [],
  [],
  FishSlice
> = set => ({
  fishes: 0,
  addFish: () => set(state => ({ fishes: state.fishes + 1 }))
});

const useBoundStore = create<BearSlice & FishSlice>()(
  devtools(
    immer((...a) => ({
      ...createBearSlice(...a),
      ...createFishSlice(...a)
    }))
  )
);
export { useBoundStore };

import { create } from 'zustand'

const useStore = create((set) => ({
        her: 0,
        // hertnum: () => set((state) => ({ bears: state.bears + 1 })),
        // hertnum: () => set({ her: 0 }),
        updateUser: (newher) => set({her: newher })
}))
export default useStore

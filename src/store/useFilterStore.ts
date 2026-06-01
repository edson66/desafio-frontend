import { create } from 'zustand';

interface FilterState {
  categoryFilter: string;
  minPrice: string;
  maxPrice: string;
  statusFilter: string;
  setCategoryFilter: (category: string) => void;
  setMinPrice: (price: string) => void;
  setMaxPrice: (price: string) => void;
  setStatusFilter: (status: string) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  categoryFilter: '',
  minPrice: '',
  maxPrice: '',
  statusFilter: '',
  
  setCategoryFilter: (category) => set({ categoryFilter: category }),
  setMinPrice: (price) => set({ minPrice: price }),
  setMaxPrice: (price) => set({ maxPrice: price }),
  setStatusFilter: (status) => set({ statusFilter: status }),
  
  resetFilters: () => set({ categoryFilter: '', minPrice: '', maxPrice: '', statusFilter: '' }),
}));
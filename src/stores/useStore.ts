// src/stores/useStore.ts
import { create } from "zustand";
import productsData from "./products.json"; // Import the JSON data

type Product = {
  id: number;
  name: string;
  price: string;
  oldPrice: string;
  imageUrl: string;
  description: string;
  rating: number;
};

type StoreState = {
  products: Product[];
  setProducts: (products: Product[]) => void;
};

const useStore = create<StoreState>((set) => ({
  products: productsData, // Use the imported data directly
  setProducts: (products) => set({ products }),
}));

export default useStore;

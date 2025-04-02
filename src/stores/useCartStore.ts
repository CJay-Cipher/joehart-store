// src/stores/useCartStore.ts
import { create } from "zustand";

type Product = {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  imageUrl: string;
  description?: string;
  rating?: number;
};

type CartState = {
  cart: Product[];
  addToCartStore: (product: Product) => void;
  removeFromCart: (productid: string) => void;
  clearCart: () => void;
};

const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCartStore: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;

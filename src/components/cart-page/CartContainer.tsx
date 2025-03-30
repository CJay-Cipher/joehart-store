// src/components/Cart.tsx
import React from "react";
import useCartStore from "@/stores/useCartStore";

const CartContainer = () => {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div className="p-4 min-h-full border-y">
      <h2 className="xl:text-[24px] md:text-[20px] text-[18px] text-center mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="xl:text-[18px] md:text-[16px] text-[14px] text-center">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="border-b py-2">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <p>{item.description}</p>
            </div>
          ))}
          <button onClick={clearCart} className="mt-4 bg-red-500 text-white rounded px-4 py-2">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartContainer;

import React, { useEffect, useState } from "react";
import { getItem, setItem } from "@/utils/localStorage";

type CartContainerProps = {
  removeFromCart: (productData: { [key: string]: Product }) => void;
};
type Product = {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  imageUrl: string;
  description?: string;
  rating?: number;
};

const CartContainer = ({ removeFromCart }: CartContainerProps) => {
  const [cartData, setCartData] = useState<{ [key: string]: Product }>(() => {
    const cartItems = getItem("cartData");
    return cartItems || {};
  });

  const handleRemoveItem = (id: string) => {
    setCartData((prevData) => {
      const newCart = { ...prevData };
      delete newCart[id]; // Remove the item by ID
      return newCart; // Return the updated cart
    });
  };

  const handleClearCart = () => {
    setCartData({}); // Clear the cart
  };

  useEffect(() => {
    setItem("cartData", cartData);
    removeFromCart(cartData);
    console.log("Cart:", cartData);
  }, [cartData, removeFromCart]);

  return (
    <div className="p-4 min-h-full">
      <h2 className="xl:text-[24px] md:text-[20px] text-[18px] text-center mb-4">Your Cart</h2>
      {Object.keys(cartData).length === 0 ? (
        <p className="xl:text-[18px] md:text-[16px] text-[14px] text-center">Your cart is empty.</p>
      ) : (
        <div>
          {Object.values(cartData).map((item) => (
            <div key={item.id} className="border-b border-custom-slate-400 py-2">
              <h3>{item.name}</h3>
              <p>Price: ₦ {item.price}</p>
              <p>{item.description}</p>
              <button
                onClick={() => handleRemoveItem(item.id)} // Pass the item ID to the remove function
                className="mt-4 bg-custom-red text-main-white rounded px-4 py-2"
              >
                Remove item
              </button>
            </div>
          ))}
          <button onClick={handleClearCart} className="mt-4 bg-custom-blood-red text-main-white rounded px-4 py-2">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartContainer;

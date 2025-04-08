"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header/page";
import CartContainer from "../../components/cart-page/CartContainer";
import { getItem } from "@/utils/localStorage";

type Product = {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  imageUrl: string;
  description?: string;
  rating?: number;
};

export default function Cart() {
  const [cartCount, setCartCount] = useState<number>(0);

  // Initialize cart count from localStorage
  useEffect(() => {
    const cartData = getItem("cartData");
    setCartCount(Object.keys(cartData || {}).length);
  }, []);

  const removeFromCart = (cartData: { [key: string]: Product }) => {
    setCartCount(Object.keys(cartData).length);
    console.log("Updated Cart Data:", cartData);
  };

  return (
    <div className="font-montserrat">
      <Header cartCounter={cartCount} />
      <CartContainer removeFromCart={removeFromCart} />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Header from "@/components/Header/page";
import Products from "@/components/products/page";
import PagePath from "@/components/homepage/PagePath";

type Product = {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  imageUrl: string;
  description?: string;
  rating?: number;
  quantity?: number;
};

const pageName = "Deals";

export default function Deals() {
  // const [wishlistCount, setWishlistCount] = useState<number>(0);
  const [cartCount, setCartCount] = useState<number>(0);
  // const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to track timeout

  //

  // const wishlistDecrement = () => {
  //   setWishlistCount((prevCount) => prevCount - 1);
  // };

  const addToCart = (cartData: { [key: string]: Product }) => {
    setCartCount(Object.keys(cartData).length);
    console.log(cartData);
    // console.log("product data:", productData);
  };

  // const cartDecrement = () => {
  //   setCartCount((prevCount) => prevCount - 1);
  // };

  return (
    <div className="font-montserrat max-sm:bg-custom-gray-light">
      <Header cartCounter={cartCount} activePageName={pageName} />
      {/* <Hero />
      <ExploreCarousel /> */}
      <PagePath pageName={pageName} />
      <Products addToCart={addToCart} />
    </div>
  );
}

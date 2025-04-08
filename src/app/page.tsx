"use client";

import React, { useState } from "react";
import Header from "@/components/Header/page";
import Hero from "@/components/homepage/Hero/page";
import Products from "@/components/products/page";
import ExploreCarousel from "@/components/homepage/explore-section/page";
// import PagePath from "@/components/homepage/PagePath";

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

const pageName = "Home";

export default function Home() {
  // const [wishlistCount, setWishlistCount] = useState<number>(0);
  const [cartCount, setCartCount] = useState<number>(0);

  const addToCart = (cartData: { [key: string]: Product }) => {
    setCartCount(Object.keys(cartData).length);
    // console.log(cartData);
    // console.log("product data:", productData);
  };

  return (
    <div className="font-montserrat bg-custom-gray-lighter overflow-y-visible">
      <Header cartCounter={cartCount} activePageName={pageName} />
      <Hero />
      <ExploreCarousel />
      {/* <PagePath pageName={pageName} /> */}
      <Products addToCart={addToCart} />
    </div>
  );
}

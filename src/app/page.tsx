"use client";

import React, { useState } from "react";
import Header from "@/components/homepage/Header/page";
import Hero from "@/components/homepage/Hero/page";
import Products from "@/components/products/page";
import ExploreCarousel from "@/components/homepage/explore-section/page";
import PagePath from "@/components/homepage/PagePath";

export default function Home() {
  const [wishlistCount, setWishlistCount] = useState<number>(0);
  const [cartCount, setCartCount] = useState<number>(0);
  const wishlistIncrement = () => {
    setWishlistCount((prevCount) => prevCount + 1);
  };
  const wishlistDecrement = () => {
    setWishlistCount((prevCount) => prevCount - 1);
  };

  const cartIncrement = () => {
    setCartCount((prevCount) => prevCount + 1);
  };
  const cartDecrement = () => {
    setCartCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="font-montserrat">
      <Header wishlistCount={wishlistCount} cartCount={cartCount} />
      <Hero />
      <ExploreCarousel />
      <PagePath />
      <Products wishlistIncreament={wishlistIncrement} wishlistDecreament={wishlistDecrement} cartIncrement={cartIncrement} cartDecrement={cartDecrement} />
    </div>
  );
}

"use client";

import React, { useEffect, useState, useRef } from "react";
import Header from "@/components/homepage/Header/page";
import Hero from "@/components/homepage/Hero/page";
import Products from "@/components/products/page";
import ExploreCarousel from "@/components/homepage/explore-section/page";
import PagePath from "@/components/homepage/PagePath";

export default function Home() {
  const [wishlistCount, setWishlistCount] = useState<number>(0);
  const [cartCount, setCartCount] = useState<number>(0);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to track timeout

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

  useEffect(() => {
    setShowHeader(true);

    // Clear existing timeout before setting a new one
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      console.log("Clear setTimeout");
    }

    // Hide the header after 5 seconds
    timeoutRef.current = setTimeout(() => {
      setShowHeader(false);
      console.log("showHeader set to:", false);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clean up the timeout when the component unmounts
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [wishlistCount, cartCount]);

  return (
    <div className="font-montserrat max-sm:bg-custom-gray-light">
      <Header wishlistCount={wishlistCount} cartCount={cartCount} showHeader={showHeader} />
      <Hero />
      <ExploreCarousel />
      <PagePath />
      <Products wishlistIncreament={wishlistIncrement} wishlistDecreament={wishlistDecrement} cartIncrement={cartIncrement} cartDecrement={cartDecrement} />
    </div>
  );
}

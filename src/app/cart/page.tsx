"use client";

import React from "react";
import Header from "@/components/homepage/Header/page";
import UserCart from "../../components/cart-page/CartContainer";
// import Products from "@/components/products/page";

// type Product = {
//   id: number;
//   name: string;
//   price: string;
//   oldPrice?: string;
//   imageUrl: string;
//   description?: string;
//   rating?: number;
// };

export default function Cart() {
  //   const [wishlistCount, setWishlistCount] = useState<number>(0);
  //   const [cartCount, setCartCount] = useState<number>(0);
  // const [showHeader, setShowHeader] = useState<boolean>(true);
  // const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to track timeout

  //   const addToWishlist = () => {
  //     setWishlistCount((prevCount) => prevCount + 1);
  //   };

  //   const wishlistDecrement = () => {
  //     setWishlistCount((prevCount) => prevCount - 1);
  //   };

  //   const addToCart = (productData: Product) => {
  //     setCartCount((prevCount) => prevCount + 1);
  //     console.log("product data:", productData);
  //   };

  //   const cartDecrement = () => {
  //     setCartCount((prevCount) => prevCount - 1);
  //   };

  //   useEffect(() => {
  //     setShowHeader(true);

  //     // Clear existing timeout before setting a new one
  //     if (timeoutRef.current) {
  //       clearTimeout(timeoutRef.current);
  //     }

  //     // Hide the header after 5 seconds
  //     timeoutRef.current = setTimeout(() => {
  //       setShowHeader(false);
  //     }, 5000); // 5000 milliseconds = 5 seconds

  //     // Clean up the timeout when the component unmounts
  //     return () => {
  //       if (timeoutRef.current) {
  //         clearTimeout(timeoutRef.current);
  //       }
  //     };
  //   }, [wishlistCount, cartCount]);

  return (
    <div className="font-montserrat max-sm:bg-custom-gray-light">
      <Header wishlistCount={0} cartCount={0} showHeader={true} activePageName="Home" />
      {/* <Header wishlistCount={wishlistCount} cartCount={cartCount} showHeader={showHeader} activePageName="Home" /> */}
      <UserCart />
      {/* <Products addToWishlist={addToWishlist} wishlistDecreament={wishlistDecrement} addToCart={addToCart} cartDecrement={cartDecrement} /> */}
    </div>
  );
}

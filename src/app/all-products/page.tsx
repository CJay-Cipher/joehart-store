"use client";

import React from "react";
import Header from "@/components/Header/page";
import ProductList from "./ProductList";

const AllProducts = () => {
  return (
    <div className="font-montserrat bg-custom-gray-lighter overflow-y-visible">
      <Header activePageName="all products" />
      <ProductList />
    </div>
  );
};

export default AllProducts;

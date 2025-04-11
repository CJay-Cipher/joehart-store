"use client";

import React, { useEffect, useState } from "react";
import { API_URLS } from "@/config/apiConfig";
import Image from "next/image";
import { FaEye } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import ShowingItems from "@/components/products/ShowingItems";
import SearchSortBar from "@/components/products/SearchSortBar";
import Header from "@/components/Header/page";
import ProductList from "./ProductList";

type Product = {
  _id: string;
  title: string;
  description: string;
  brandName: string;
  currentPrice: number;
  previousPrice: number;
  discount: number;
  thumbnail: {
    url: string;
  };
  categories: {
    categoryId: string;
    name: string;
  }[];
};

type ApiResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    products: Product[];
    metaData: {
      totalData: number;
      totalPages: number;
      currentPage: number;
      hasNextPage: boolean;
      nextPage: null;
      hasPrevPage: boolean;
      prevPage: null;
    };
  };
};

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URLS.allProducts}?limit=10`, {
          headers: { "ngrok-skip-browser-warning": "true" },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: ApiResponse = await response.json();
        console.log("DATA:", data);

        if (data.success) {
          setProducts(data.data.products);
          console.log("DATA 1:");
        } else {
          throw new Error(data.message);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
        console.log("DATA 2:");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <p className="text-[24px] font-medium">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <p className="text-red-500 font-medium">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="font-montserrat bg-custom-gray-lighter overflow-y-visible">
      <Header />
      <ProductList />
    </div>
  );
};

export default AllProducts;

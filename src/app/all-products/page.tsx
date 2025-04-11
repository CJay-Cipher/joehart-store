"use client";

import React, { useEffect, useState } from "react";
import { API_URLS } from "@/config/apiConfig";
import Image from "next/image";

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
    <div>
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <div className="grid grid-cols-1 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow">
            {/* <Image width={100} height={100} src={product.thumbnail.url} alt={product.title} className="mb-2" /> */}
            <img src={product.thumbnail.url} alt={product.title} className="h-[100px] mb-2" />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-green-600">Current Price: ₦{product.currentPrice}</p>
            <p className="line-through mb-2">Previous Price: ₦{product.previousPrice}</p>
            <p className="text-red-500">Discount: {product.discount}%</p>
            <div className="mt-2">
              <h4 className="font-medium">Categories:</h4>
              <ul className="list-disc pl-5">
                {product.categories.map((category) => (
                  <li key={category.categoryId} className="text-sm">
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

"use client";

import React, { useEffect, useState } from "react";
import { API_URLS } from "@/config/apiConfig";
import Image from "next/image";
import { FaEye } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";

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
      {/* <div className="grid grid-cols-1 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow">
            <Image width={100} height={100} src={product.thumbnail.url} alt={product.title} className="mb-2" />
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
      </div> */}

      {/*  PRODUCTS GRID */}
      <div className="flex flex-wrap justify-center md:gap-4 gap-3 lg:mt-8 mt-4">
        {products.map((product) => (
          <div // card
            key={product._id}
            className="relative flex xs:flex-col max-3xs:flex-col justify-between 3xs:max-xs:items-center gap-1 xl:max-w-[270px] lg:max-w-[260px] md:max-w-[250px] sm:max-w-[240px] xs:max-w-[230px] w-full max-3xs:max-w-[250px] bg-custom-gray-light border border-shadow xl:rounded-[15px] md:rounded-[10px] rounded-[3px] overflow-hidden shadow-[0_4px_10px_#eff2f7] hover:shadow-custom-blue-light hover:border-custom-gray-dark transition-colors duration-300 group"
          >
            <div // image div
              className="flex 2xs:justify-center max-3xs:justify-center items-center xs:w-full max-3xs:w-full h-full w-max md:p-4 2xs:p-3 p-2 bg-main-white xl:rounded-[15px] md:rounded-[10px] rounded-[3px] 2xs:border-b border-r border-shadow overflow-hidden"
            >
              <Image // image
                width={100}
                height={100}
                src={product.thumbnail.url}
                alt={product.title}
                className="w-[150px] max-2xs:w-[150px] object-cover xl:rounded-[15px] md:rounded-[10px] rounded-[3px] sm:group-hover:scale-110 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div // content
              className="md:p-3 p-2 flex-1 flex flex-col"
            >
              {/* <div // rating
                      className="flex items-center md:text-md text-sm"
                    >
                      {product.rating && (
                        <span className={`text-yellow-500`}>
                          {"★".repeat(Math.floor(product.rating))}
                          {"☆".repeat(5 - Math.floor(product.rating))}
                        </span>
                      )}
                      <span className="ml-2 lg:text-[12px] text-[10px] text-custom-gray">({product.rating})</span>
                    </div> */}
              <h2 className="font-bold lg:text-[16px] text-[14px] w-[200px] xs:truncate max-3xs:truncate">{product.title}</h2>
              <p className="text-custom-gray lg:text-[12px] text-[10px] w-[200px] xs:truncate max-3xs:truncate">{product.description}</p>
              <div // title, description, price & CTA
                className=""
              >
                <div className="flex items-center max-2xs:flex-wrap sm:gap-4">
                  <p className="font-semibold lg:text-[16px] text-[14px] mr-4">₦ {Number(product.currentPrice).toLocaleString()}</p>
                  <p className="lg:text-[12px] text-[10px] text-custom-gray font-medium line-through">{product.previousPrice}</p>
                </div>
                <div className="flex flex-row-reverse 3xs:max-xs:flex-col gap-2 mt-2">
                  <div className="flex justify-between gap-2">
                    <button
                      // onClick={addToCart}
                      className="flex items-center md:gap-2 gap-1 lg:text-[14px] text-[12px] text-button-bg border border-button-bg py-1 px-2 rounded hover:border-transparent hover:text-main-white hover:bg-button-bg-hover "
                    >
                      <span className="xs:hidden max-3xs:hidden 3xs:max-xs:visible">View</span>
                      <FaEye className="xl:h-[18px] xl:w-[18px] h-[16px] w-[16px] xs:visible max-3xs:visible 3xs:max-xs:hidden" />
                    </button>
                  </div>
                  <button
                    // onClick={() => handleAddToCart(product)}
                    className="flex flex-1 justify-center items-center md:gap-2 gap-1 lg:text-[14px] text-[12px] bg-button-bg text-main-white py-1 sm:px-3 px-2 rounded hover:bg-button-bg-hover"
                  >
                    <span>Add to Cart</span>
                    <IoCartOutline className="xl:h-[17px] xl:w-[17px] h-[15px] w-[15px]" />
                  </button>
                </div>
              </div>
            </div>
            <button
              // onClick={() => handleAddToWishlist(product)}
              className="absolute 3xs:max-xs:left-2 top-2 right-2 flex items-center justify-center md:gap-2 gap-1 lg:text-[14px] text-[12px] text-custom-slate-400 bg-main-white border border-custom-slate-400 xl:h-8 xl:w-8 h-7 w-7 rounded-[50%] hover:text-custom-red hover:border-custom-red"
            >
              <span className="hidden">Wishlist</span>
              <IoMdHeart className="xl:h-[18px] xl:w-[18px] h-[16px] w-[16px]" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

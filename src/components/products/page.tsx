import React from "react";
import useStore from "@/stores/useStore";
import useCartStore from "@/stores/useCartStore";
import Image from "next/image";
import ShowingItems from "./ShowingItems";
import SearchSortBar from "./SearchSortBar";
import { IoMdHeart } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa6";
// import ViewType from "./ViewType";

type ProductsProps = {
  addToWishlist: (productData: Product) => void;
  wishlistDecreament: (productData: Product) => void;
  addToCart: (productData: Product) => void;
  cartDecrement?: (productData: Product) => void;
};

type Product = {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  imageUrl: string;
  description?: string;
  rating?: number;
};

// const Products = ({ addToWishlist, wishlistDecreament, addToCart, cartDecrement }: ProductsProps) => {
const Products = ({ addToWishlist, addToCart }: ProductsProps) => {
  const { products } = useStore(); // Get products from the store
  const addToCartStore = useCartStore((state) => state.addToCartStore);
  const handleAddToCart = (productData: Product) => {
    addToCart(productData);
    addToCartStore(productData);
    // You can add any additional actions here as needed
  };
  const handleAddToWishlist = (productData: Product) => {
    addToWishlist(productData);
  };

  return (
    <div className="mx-auto w-[100%] max-w-[1480px] mt-4 lg:px-8 md:px-6 px-4">
      <div className="flex max-lg:flex-col-reverse lg:justify-between items-center lg:gap-8 gap-3">
        <ShowingItems />
        {/* <ViewType /> */}
        <SearchSortBar />
      </div>

      {/*  PRODUCTS GRID */}
      <div className="flex flex-wrap justify-center md:gap-4 gap-3 lg:mt-8 mt-4">
        {products.map((product) => (
          <div // card
            key={product.id}
            className="relative flex xs:flex-col max-3xs:flex-col justify-between 3xs:max-xs:items-center gap-1 xl:max-w-[270px] lg:max-w-[260px] md:max-w-[250px] sm:max-w-[240px] xs:max-w-[230px] w-full max-3xs:max-w-[250px] max-3xs: bg-custom-slate-100 border border-shadow xl:rounded-[15px] md:rounded-[10px] rounded-[3px] overflow-hidden md:shadow-lg shadow-md hover:shadow-custom-blue-light hover:border-custom-gray-dark transition-colors duration-300 group"
          >
            <div // image div
              className="flex 2xs:justify-center max-3xs:justify-center items-center xs:w-full max-3xs:w-full h-full w-max md:p-4 2xs:p-3 p-2 bg-main-white xl:rounded-[15px] md:rounded-[10px] rounded-[3px] 2xs:border-b border-r border-shadow overflow-hidden"
            >
              <Image // image
                width={100}
                height={100}
                src={product.imageUrl}
                alt={product.name}
                className="w-[150px] max-2xs:w-[150px] object-cover xl:rounded-[15px] md:rounded-[10px] rounded-[3px] sm:group-hover:scale-110 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div // content
              className="md:p-3 p-2 flex-1 flex flex-col"
            >
              <div // rating
                className="flex items-center md:text-md text-sm"
              >
                {product.rating && (
                  <span className={`text-yellow-500`}>
                    {"★".repeat(Math.floor(product.rating))}
                    {"☆".repeat(5 - Math.floor(product.rating))}
                  </span>
                )}
                <span className="ml-2 lg:text-[12px] text-[10px] text-custom-gray">({product.rating})</span>
              </div>
              <h2 className="font-bold lg:text-[16px] text-[14px] xs:truncate max-3xs:truncate">{product.name}</h2>
              <p className="text-custom-gray lg:text-[12px] text-[10px] xs:truncate max-3xs:truncate">{product.description}</p>
              <div // title, description, price & CTA
                className=""
              >
                <div className="flex items-center max-2xs:flex-wrap sm:gap-4">
                  <p className="font-semibold lg:text-[16px] text-[14px] mr-4">₦ {Number(product.price).toLocaleString()}</p>
                  <p className="lg:text-[12px] text-[10px] text-custom-gray font-medium line-through">{product.oldPrice}</p>
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
                    onClick={() => handleAddToCart(product)}
                    className="flex flex-1 justify-center items-center md:gap-2 gap-1 lg:text-[14px] text-[12px] bg-button-bg text-main-white py-1 sm:px-3 px-2 rounded hover:bg-button-bg-hover"
                  >
                    <span>Add to Cart</span>
                    <IoCartOutline className="xl:h-[17px] xl:w-[17px] h-[15px] w-[15px]" />
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleAddToWishlist(product)}
              className="absolute 3xs:max-xs:left-2 top-2 right-2 flex items-center justify-center md:gap-2 gap-1 lg:text-[14px] text-[12px] text-custom-slate-400 bg-main-white border border-custom-slate-400 xl:h-8 xl:w-8 h-7 w-7 rounded-[50%] hover:text-custom-red hover:border-custom-red"
            >
              <span className="hidden">Wishlist</span>
              <IoMdHeart className="xl:h-[18px] xl:w-[18px] h-[16px] w-[16px]" />
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center mx-auto mt-8">
        <h2>Add and Remove from Wishlist Test</h2>
        <div className="flex w-[300px] p-1 border border-red-400">
          <button
            // onClick={addToWishlist}
            className="xl:w-[200px] xl: border-custom-gray-darkh-[50px] [5px]:w-[185px] lg:h-[45px] md:w-[170px] md:h-[40px] w-[155px] h-[35px] flex justify-center items-center bg-button-hero-bg hover:bg-button-hero-bg-hover border border-main-white rounded-[50px] text-nowrap xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-semibold text-main-white"
          >
            Add
          </button>
          <button
            // onClick={wishlistDecreament}
            className="xl:w-[200px] xl:h-[50px] lg:w-[185px] lg:h-[45px] md:w-[170px] md:h-[40px] w-[155px] h-[35px] flex justify-center items-center bg-button-hero-bg hover:bg-button-hero-bg-hover border border-main-white rounded-[50px] text-nowrap xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-semibold text-main-white"
          >
            Remove
          </button>
        </div>

        <h2 className="mt-4">Add and Remove from cart Test</h2>
        <div className="flex w-[300px] p-1 border border-red-400">
          <button
            // onClick={addToCart}
            className="xl:w-[200px] xl:h-[50px] lg:w-[185px] lg:h-[45px] md:w-[170px] md:h-[40px] w-[155px] h-[35px] flex justify-center items-center bg-button-hero-bg hover:bg-button-hero-bg-hover border border-main-white rounded-[50px] text-nowrap xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-semibold text-main-white"
          >
            Add
          </button>
          <button
            // onClick={cartDecrement}
            className="xl:w-[200px] xl:h-[50px] lg:w-[185px] lg:h-[45px] md:w-[170px] md:h-[40px] w-[155px] h-[35px] flex justify-center items-center bg-button-hero-bg hover:bg-button-hero-bg-hover border border-main-white rounded-[50px] text-nowrap xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-semibold text-main-white"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;

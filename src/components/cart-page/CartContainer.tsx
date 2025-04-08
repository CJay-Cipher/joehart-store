import React, { useEffect, useState } from "react";
import { getItem, setItem } from "@/utils/localStorage";
import Image from "next/image";
import ClearCartModal from "../modal/ClearCartModal";
import RemoveItemModal from "../modal/RemoveItemModal";

type CartContainerProps = {
  removeFromCart: (productData: { [key: string]: Product }) => void;
};
type Product = {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  imageUrl: string;
  description?: string;
  rating?: number;
};

const CartContainer = ({ removeFromCart }: CartContainerProps) => {
  const [openClearCartModal, setOpenClearCartModal] = useState<boolean>();
  const [openRemoveItemModal, setRemoveItemModal] = useState<boolean>();
  const [cartData, setCartData] = useState<{ [key: string]: Product }>(() => {
    const cartItems = getItem("cartData");
    return cartItems || {};
  });

  const handleRemoveItem = (id: string) => {
    setCartData((prevData) => {
      const newCart = { ...prevData };
      delete newCart[id]; // Remove the item by ID
      return newCart; // Return the updated cart
    });
    setRemoveItemModal(false);
  };

  const handleClearCart = () => {
    setCartData({}); // Clear the cart
    setOpenClearCartModal(false);
  };

  const cancelClearCart = () => {
    setOpenClearCartModal(false);
  };

  const cancelRemoveItem = () => {
    setRemoveItemModal(false);
  };

  useEffect(() => {
    setItem("cartData", cartData);
    removeFromCart(cartData);
    console.log("Cart:", cartData);
  }, [cartData, removeFromCart]);

  return (
    <div className="w-full max-w-[700px] mx-auto p-4 min-h-full">
      <h2 className="font-medium text-main-black xl:text-[24px] md:text-[20px] text-[18px] text-center mb-4">
        Your Cart (<span className="font-bold">{Object.keys(cartData).length}</span>)
      </h2>
      {Object.keys(cartData).length === 0 ? (
        <p className="xl:text-[18px] md:text-[16px] text-[14px] text-center">Your cart is empty.</p>
      ) : (
        <div className="md:mt-8 mt-6 flex flex-col md:gap-6 gap-4">
          {Object.values(cartData).map((item) => (
            <div key={item.id} className="flex items-center md:gap-6 gap-4 border-b border-custom-slate-400 px-2 pb-2">
              <div // image div
                className=""
              >
                <Image // image
                  width={100}
                  height={100}
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-[150px] max-2xs:w-[150px] object-cover xl:rounded-[15px] md:rounded-[10px] rounded-[3px] sm:group-hover:scale-110 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col h-full w-full lg:gap-5 gap-3">
                <div>
                  <h3 className="text-button-bg font-bold lg:text-[16px] text-[14px] max-3xs:truncate">{item.name}</h3>
                  <p className="text-custom-gray lg:text-[12px] text-[10px] xs:truncate max-3xs:truncate">{item.description}</p>
                  <p className="mt-2 font-bold lg:text-[20px] sm:text-[18px] text-[16px] mr-4">₦ {Number(item.price).toLocaleString()}</p>
                </div>
                <div className="flex items-center justify-between flex-wrap sm:gap-4 gap-2">
                  <div className="flex items-center h-max lg:gap-4 sm:gap-3 gap-2 border border-custom-slate-400 rounded-[15px] overflow-hidden">
                    <button className="flex justify-center items-center h-[24px] sm:w-[35px] w-[28px] border-r border-custom-slate-400 lg:text-[24px] sm:text-[20px] text-[18px] hover:bg-custom-slate-400 ">
                      −
                    </button>
                    <span className="lg:text-[18px] sm:text-[16px] text-[14px] font-medium">1</span>
                    <button className="flex justify-center items-center h-[24px] sm:w-[35px] w-[28px] border-l border-custom-slate-400 lg:text-[24px] sm:text-[20px] text-[18px] hover:bg-custom-slate-400 ">
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => setRemoveItemModal(true)}
                    className="py-[5px] sm:px-[16px] px-[10px] lg:text-[14px] sm:text-[12px] text-[10px] text-nowrap lg:font-semibold font-medium bg-main-white text-custom-blood-red border border-custom-blood-red rounded hover:text-main-white hover:bg-custom-blood-red"
                  >
                    Remove item
                  </button>
                  {openRemoveItemModal && <RemoveItemModal cancelRemoveItem={cancelRemoveItem} onClick={() => handleRemoveItem(item.id)} />}
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={() => setOpenClearCartModal(true)}
            className="w-max mx-auto mt-4 font-semibold text-main-white lg:text-[16px] text-[14px] bg-custom-blood-red rounded px-6 py-2 hover:bg-custom-red"
          >
            Clear Cart
          </button>
        </div>
      )}
      {openClearCartModal && <ClearCartModal cancelClearCart={cancelClearCart} onClick={handleClearCart} />}
    </div>
  );
};

export default CartContainer;

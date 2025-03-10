import React from "react";
import Image from "next/image";
import perfume from "../../images/perfume.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { BsPersonPlus } from "react-icons/bs";
import { PiUserCirclePlusLight } from "react-icons/pi";
import { IoChevronDownOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="h-[80px] bg-header-bg flex items-center justify-center">
      <nav className="font-montserrat flex items-center justify-between h-full w-[80%] max-w-[1440px] mx-auto px-4 bg-header-bg text-[12px]">
        <div className="flex items-center">
          <a href="" className="flex items-center gap-[5px] font-outfit text-[18px] font-bold text-black tracking-[1.1px]">
            <Image src={perfume} alt="Perfume" className="w-[26px] h-[26px]" />
            JoeHart Store
          </a>
        </div>
        <div className="flex gap-2 font-medium text-black tracking-[1px]">
          <a
            href="#"
            className="px-[14px] py-[5px] rounded-[30px] border border-transparent hover:border-custom-gray-dark transition-colors duration-300 text-main-text hover:text-main-black"
          >
            HOME
          </a>
          <a
            href="#"
            className="px-[14px] py-[5px] rounded-[30px] border border-transparent hover:border-custom-gray-dark transition-colors duration-300 text-main-text hover:text-main-black"
          >
            DEALS
          </a>
          <a
            href="#"
            className="flex items-center gap-[2px] px-[14px] py-[5px] rounded-[30px] border border-transparent hover:border-custom-gray-dark transition-colors duration-300 text-main-text hover:text-main-black"
          >
            CATEGORIES
            <IoChevronDownOutline className="h-[16px] w-[16px]" />
          </a>
          <a
            href="#"
            className="px-[14px] py-[5px] rounded-[30px] border border-transparent hover:border-custom-gray-dark transition-colors duration-300 text-main-text hover:text-main-black"
          >
            BEST SELLER
          </a>
          <a
            href="#"
            className="px-[14px] py-[5px] rounded-[30px] border border-transparent hover:border-custom-gray-dark transition-colors duration-300 text-main-text hover:text-main-black"
          >
            BRANDS
          </a>
        </div>
        <div className="flex items-center gap-3 tracking-[0.8px]">
          <a
            href=""
            className="relative flex items-center gap-2 px-[10px] py-[5px] text-[12px] text-main-text bg-main-white rounded-[50px] border border-custom-gray-dark hover:border-main-text transition-colors duration-300"
          >
            <span>Wishlist</span>
            <IoMdHeartEmpty className="h-[18px] w-[18px]" />
            <span className="absolute flex justify-center items-center h-[17px] w-[17px] top-[-5px] right-[-5px] text-main-white bg-custom-red font-semibold rounded-[50%]">
              0
            </span>
          </a>
          <a
            href=""
            className="relative flex items-center gap-2 px-[10px] py-[5px] text-[12px] text-main-text bg-main-white rounded-[50px] border border-custom-gray-dark hover:border-main-text transition-colors duration-300"
          >
            <span>Cart</span>
            <IoCartOutline className="h-[18px] w-[18px]" />
            <span className="absolute flex justify-center items-center h-[17px] w-[17px] top-[-5px] right-[-5px] text-main-white bg-custom-red font-semibold rounded-[50%]">
              0
            </span>
          </a>
          <a
            href=""
            className="relative flex items-center gap-2 px-[10px] py-[5px] text-[12px] text-main-text bg-main-white rounded-[50px] border border-custom-gray-dark hover:border-main-text transition-colors duration-300"
          >
            <span>Sign Up</span>
            <BsPersonPlus className="h-[18px] w-[18px]" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;

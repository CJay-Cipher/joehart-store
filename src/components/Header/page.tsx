"use client";

import React, { useState } from "react";
import Image from "next/image";
import perfume from "../../images/perfume.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { BsPersonPlus } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";
import MenuIconOpenClose from "./MenuIconOpenClose";
import MobileDropdown from "./MobileDropdown";

const navLinks = [
  { name: "HOME", href: "#" },
  { name: "DEALS", href: "#" },
  { name: "CATEGORIES", href: "#", hasIcon: true },
  { name: "BEST SELLER", href: "#" },
  { name: "BRANDS", href: "#" },
];

const navItems = [
  { name: "Wishlist", href: "#", icon: <IoMdHeartEmpty />, count: 0 },
  { name: "Cart", href: "#", icon: <IoCartOutline />, count: 0 },
  { name: "Sign Up", href: "#", icon: <BsPersonPlus /> },
];

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="lg:h-[80px] md:h-[60px] h-[50px] bg-header-bg flex items-center justify-center">
      <nav className="font-montserrat flex items-center justify-between h-full w-full max-w-[1400px] mx-auto lg:px-8 md:px-6 px-4 bg-header-bg text-[12px]">
        <div className="flex items-center">
          <a href="" className="flex items-center gap-[5px] font-outfit  xl:text-[18px] text-[16px] text-nowrap font-bold text-black tracking-[0.9px]">
            <Image src={perfume} alt="Perfume" className="w-[26px] h-[26px]" />
            JoeHart
          </a>
        </div>
        <div className="flex items-center xl:gap-2 gap-1 max-lg:hidden font-medium xl:text-[12px] text-[10px]">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`px-[14px] py-[5px] rounded-[30px] border border-transparent hover:border-custom-gray-dark transition-colors duration-200 text-main-text hover:text-main-black text-nowrap xl:tracking-[0.8px] tracking-[0.6px] ${
                link.hasIcon && "flex items-center gap-[2px]"
              }`}
            >
              {link.name}
              {link.hasIcon && <IoChevronDownOutline className="h-[16px] w-[16px]" />}
            </a>
          ))}
        </div>
        <div className="flex items-center md:gap-3 gap-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative flex items-center gap-2 md:px-[12px] px-[5px] py-[5px] xl:text-[12px] text-[11px] text-main-text text-nowrap rounded-[50px] border border-custom-gray-light transition-colors duration-200 hover:bg-custom-gray-light"
            >
              <span className="max-md:hidden ">{item.name}</span>
              {React.cloneElement(item.icon, { className: "xl:h-[17px] xl:w-[17px] h-[15px] w-[15px]" })}
              {item.count !== undefined && (
                <span className="absolute flex justify-center items-center md:h-[17px] md:w-[17px] h-[15px] w-[15px] top-[-8px] right-[-6px] md:text-[12px] text-[10px] text-main-white bg-custom-red font-semibold rounded-[50%]">
                  {item.count}
                </span>
              )}
            </a>
          ))}
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleDropdown}
            className={`px-4 py-2 group cursor-pointer transition-all duration-200 border-[0.5px] border-transparent rounded-[15px] ${
              isDropdownOpen ? "hover:shadow-xl hover:border-custom-gray-light" : "hover:shadow-none hover:border-transparent"
            }`}
          >
            <MenuIconOpenClose
              isMenuOpen={isDropdownOpen}
              boxClassName="md:h-[16px] md:w-[28px] sm:h-[15px] sm:w-[26px] h-[14px] w-[24px]"
              innerClassName={`h-[2px] bg-main-text`}
            />
          </button>
        </div>

        {<MobileDropdown isMenuOpen={isDropdownOpen} />}
      </nav>
    </div>
  );
};

export default Header;

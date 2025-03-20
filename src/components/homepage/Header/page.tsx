"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import perfume from "../../../images/perfume.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { BsPersonPlus } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";
import MenuIconOpenClose from "./MenuIconOpenClose";

type HeaderProps = {
  wishlistCount?: number;
  cartCount?: number;
  showHeader?: boolean;
};

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "DEALS", href: "/deals" },
  { name: "CATEGORIES", hasIcon: true },
  { name: "BEST SELLER", href: "best-seller" },
  { name: "BRANDS", href: "brands" },
];

const Header = ({ wishlistCount, cartCount, showHeader }: HeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Arbitrary distance to start hiding
        if (window.scrollY < lastScrollY) {
          setIsHeaderVisible(true); // Scrolling up
        } else if (!showHeader) {
          setIsHeaderVisible(false); // Scrolling down
        }
      } else {
        setIsHeaderVisible(true); // Show header if at top or below the threshold
      }
      lastScrollY = window.scrollY;
    };
    console.log("showHeader state:", showHeader);

    if (showHeader) {
      setIsHeaderVisible(true); // Show the header
    } else if (window.scrollY > 100) {
      setIsHeaderVisible(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showHeader]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`fixed z-100 top-0 w-full lg:h-[80px] md:h-[60px] h-[55px] bg-header-bg flex items-center justify-center transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="font-montserrat relative flex items-center justify-between h-full w-full max-w-[1480px] mx-auto lg:px-8 md:px-6 px-4 bg-header-bg text-[12px]">
        <div className="flex items-center gap-[5px] font-outfit xl:text-[18px] text-[16px] text-nowrap font-bold text-black tracking-[0.9px]">
          <Image src={perfume} alt="Perfume" className="w-[26px] h-[26px]" />
          JoeHart
        </div>
        <div className="flex items-center xl:gap-2 gap-1 max-lg:hidden font-medium xl:text-[12px] text-[10px]">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href || "#"}
              className={`px-[14px] py-[5px] rounded-[30px] border border-transparent transition-colors duration-200 text-main-text hover:border-custom-gray-dark hover:text-main-black active:border-custom-gray-dark active:text-main-black text-nowrap xl:tracking-[0.8px] tracking-[0.6px] cursor-pointer ${
                link.hasIcon && "flex items-center gap-[2px]"
              }`}
            >
              {link.name}
              {link.hasIcon && <IoChevronDownOutline className="h-[16px] w-[16px]" />}
            </Link>
          ))}
        </div>

        <div className="max-sm:absolute max-sm:w-full flex items-center max-sm:justify-center md:gap-3 sm:gap-4 gap-2">
          <a
            href="#"
            className="relative flex items-center gap-2 md:px-[12px] md:py-[5px] px-[7px] py-[7px] xl:text-[12px] text-[11px] text-main-text text-nowrap rounded-[50px] bg-custom-gray-light border border-custom-gray-dark transition-colors duration-100 hover:bg-button-hero-bg-hover hover:text-main-white"
          >
            <span className="max-md:hidden">Wishlist</span>
            <IoMdHeartEmpty className="xl:h-[18px] xl:w-[18px] h-[17px] w-[17px]" />
            <span className="absolute flex justify-center items-center md:h-[18px] md:w-[18px] h-[15px] w-[15px] top-[-5px] right-[-6px] md:text-[12px] text-[10px] text-main-white bg-custom-red font-semibold rounded-[50%]">
              {wishlistCount}
            </span>
          </a>

          <a
            href="#"
            className="relative flex items-center gap-2 md:px-[12px] md:py-[5px] px-[7px] py-[7px] xl:text-[12px] text-[11px] text-main-text text-nowrap rounded-[50px] bg-custom-gray-light border border-custom-gray-dark transition-colors duration-100 hover:bg-button-hero-bg-hover hover:text-main-white"
          >
            <span className="max-md:hidden">Cart</span>
            <IoCartOutline className="xl:h-[18px] xl:w-[18px] h-[17px] w-[17px]" />
            <span className="absolute flex justify-center items-center md:h-[18px] md:w-[18px] h-[15px] w-[15px] top-[-5px] right-[-6px] md:text-[12px] text-[10px] text-main-white bg-custom-red font-semibold rounded-[50%]">
              {cartCount}
            </span>
          </a>

          <a
            href="#"
            className="flex items-center gap-2 md:px-[12px] md:py-[5px] px-[7px] py-[7px] xl:text-[12px] text-[11px] text-main-text text-nowrap rounded-[50px] bg-custom-gray-light border border-custom-gray-dark transition-colors duration-100 hover:bg-button-hero-bg-hover hover:text-main-white"
          >
            <span className="max-md:hidden">Sign Up</span>
            <BsPersonPlus className="xl:h-[18px] xl:w-[18px] h-[17px] w-[17px]" />
          </a>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toggleDropdown}
            className={`p-2 group cursor-pointer transition-all duration-200 border-[0.5px] border-transparent rounded-[5px] ${
              isDropdownOpen
                ? "hover:shadow-xl hover:border-custom-gray-light focus:shadow-xl focus:border-custom-gray-light"
                : "hover:shadow-none hover:border-transparent focus:shadow-none focus:border-transparent"
            }`}
          >
            <MenuIconOpenClose
              isMenuOpen={isDropdownOpen}
              boxClassName="md:h-[16px] md:w-[28px] sm:h-[15px] sm:w-[26px] h-[14px] w-[24px]"
              innerClassName={`h-[2px] bg-main-text`}
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;

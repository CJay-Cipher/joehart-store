"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import perfume from "../../../images/perfume.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { BsPersonPlus } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";
import MenuIconOpenClose from "./MenuIconOpenClose";
import HeaderBtnCTA from "./HeaderBtnCTA";

type HeaderProps = {
  wishlistCount?: number;
  cartCount?: number;
  showHeader?: boolean;
  activePageName?: string;
};

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "DEALS", href: "/deals" },
  { name: "CATEGORIES", hasIcon: true },
  { name: "BEST SELLERS", href: "/best-sellers" },
  { name: "BRANDS", href: "/brands" },
];

const Header = ({ wishlistCount, cartCount, showHeader, activePageName }: HeaderProps) => {
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
    <>
      <div
        className={`fixed z-100 top-0 w-full lg:h-[80px] md:h-[60px] h-[55px] bg-header-bg backdrop-blur-md flex items-center justify-center transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="font-montserrat relative flex items-center justify-between h-full w-full max-w-[1480px] mx-auto lg:px-8 md:px-6 px-4 text-[12px]">
          <Link
            href="/"
            className="flex items-center gap-[5px] font-outfit xl:text-[18px] text-[16px] text-nowrap font-bold text-black tracking-[0.9px] md:cursor-pointer"
          >
            <Image src={perfume} alt="Perfume" className="max-xs:hidden w-[26px] h-[26px]" />
            JoeHart
          </Link>
          <div className="flex items-center xl:gap-2 gap-1 max-lg:hidden">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href || "#"}
                className={`px-[14px] py-[5px] xl:text-[12px] text-[10px] rounded-[30px] border border-transparent transition-color duration-200 text-main-text text-nowrap cursor-pointer ${
                  link.hasIcon && "flex items-center gap-[2px]"
                } ${activePageName?.toUpperCase() == link.name ? "font-bold bg-main-white" : "font-semibold hover:text-main-white hover:bg-button-bg-hover"}`}
              >
                {link.name}
                {link.hasIcon && <IoChevronDownOutline className="h-[16px] w-[16px]" />}
              </Link>
            ))}
          </div>

          <div className="max-sm:absolute max-sm:w-full flex items-center max-sm:justify-center xl:gap-4 md:gap-3 gap-2">
            {/* Wishlist and Cart buttons */}
            <Link
              href="/wishlist"
              className="relative flex items-center gap-[2px] xl:text-[12px] text-[11px] text-custom-gray-darker text-nowrap font-medium rounded-[50px] border border-transparent transition-color duration-200 hover:text-main-black max-md:hover:scale-[1.15]"
            >
              <span className="max-md:hidden">Wishlist</span>
              <IoMdHeartEmpty className="h-[18px] w-[18px]" />
              {wishlistCount != 0 && (
                <span className="absolute flex justify-center items-center md:h-[18px] md:w-[18px] h-[15px] w-[15px] md:top-[-12px] top-[-10px] right-[-8px] md:text-[12px] text-[10px] text-main-white bg-custom-red font-semibold rounded-[50%]">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link
              href="/cart"
              className="relative flex items-center gap-[2px] xl:text-[12px] text-[11px] text-custom-gray-darker text-nowrap font-medium rounded-[50px] border border-transparent transition-color duration-200 hover:text-main-black max-md:hover:scale-[1.15]"
            >
              <span className="max-md:hidden">Cart</span>
              <IoCartOutline className="h-[18px] w-[18px]" />
              {cartCount != 0 && (
                <span className="absolute flex justify-center items-center md:h-[18px] md:w-[18px] h-[15px] w-[15px] md:top-[-12px] top-[-10px] right-[-8px] md:text-[12px] text-[10px] text-main-white bg-custom-red font-semibold rounded-[50%]">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Login buttons */}
            <HeaderBtnCTA href="/register" buttonText="Sign Up" Icon={BsPersonPlus} isDarkBg={true} />
            <HeaderBtnCTA href="/login" buttonText="Login" Icon={FiLogIn} isDarkBg={false} />
          </div>

          <div className="block lg:hidden">
            <button
              onClick={toggleDropdown}
              className={`xs:p-2 group cursor-pointer transition-all duration-200 border-[0.5px] border-transparent rounded-[5px] ${
                isDropdownOpen
                  ? "hover:shadow-xl hover:border-custom-gray md:hover:scale-[1.08] hover:scale-[1.15]-light focus:shadow-xl focus:border-custom-gray-light"
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
      <div className={`${"lg:h-[80px] md:h-[60px] h-[55px]"}`}></div>
    </>
  );
};

export default Header;

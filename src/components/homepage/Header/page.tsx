"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MenuIconOpenClose from "./MenuIconOpenClose";
import HeaderBtnCTA from "./HeaderBtnCTA";
import perfume from "../../../images/perfume.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { BsPersonPlus } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import ActionCounter from "./ActionCounter";

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

const Header = ({ wishlistCount = 0, cartCount = 0, showHeader, activePageName }: HeaderProps) => {
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
            className="flex items-center gap-[5px] font-outfit xl:text-[18px] text-[16px] text-nowrap font-bold text-black  hover:text-button-bg tracking-[0.9px] md:cursor-pointer"
          >
            <Image src={perfume} alt="Perfume" className="max-xs:hidden w-[26px] h-[26px]" />
            JoeHart
          </Link>

          <NavLinks navLinks={navLinks} activePageName={activePageName} />

          <div className="max-sm:absolute max-sm:w-full flex items-center max-sm:justify-center gap-4">
            <ActionCounter href="/wishlist" label="Wishlist" Icon={IoMdHeartEmpty} counter={wishlistCount} />
            <ActionCounter href="/cart" label="Cart" Icon={IoCartOutline} counter={cartCount} />
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

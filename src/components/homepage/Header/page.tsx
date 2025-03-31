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
import SideMenu from "./SideMenu";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Arbitrary distance to start hiding
        if (window.scrollY < lastScrollY) {
          setIsHeaderVisible(true); // Scrolling up
        } else if (!showHeader && !isMenuOpen) {
          setIsHeaderVisible(false); // Scrolling down
        }
      } else {
        setIsHeaderVisible(true); // Show header if at top or below the threshold
      }
      lastScrollY = window.scrollY;
    };

    if (showHeader) {
      setIsHeaderVisible(true); // Show the header
    } else if (window.scrollY > 100 && !isMenuOpen) {
      setIsHeaderVisible(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showHeader, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            className="z-10 flex items-center gap-[5px] font-outfit xl:text-[18px] text-[16px] text-nowrap font-bold text-main-black hover:text-button-bg tracking-[0.9px] cursor-pointer"
          >
            <Image src={perfume} alt="Perfume" className="max-xs:hidden w-[26px] h-[26px]" />
            JoeHart
          </Link>

          <div className="max-lg:hidden">
            <NavLinks navLinks={navLinks} activePageName={activePageName} />
          </div>

          <div className="max-sm:absolute max-sm:w-full flex items-center max-sm:justify-center gap-4">
            <ActionCounter href="/wishlist" label="Wishlist" Icon={IoMdHeartEmpty} counter={wishlistCount} />
            <ActionCounter href="/cart" label="Cart" Icon={IoCartOutline} counter={cartCount} />
            <div className="max-lg:hidden flex items-center gap-2">
              <HeaderBtnCTA href="/register" buttonText="Sign Up" Icon={BsPersonPlus} isDarkBg={true} />
              <HeaderBtnCTA href="/login" buttonText="Login" Icon={FiLogIn} isDarkBg={false} />
            </div>
          </div>

          <button onClick={toggleMenu} className={`z-100 lg:hidden rounded-md p-2 border-transparent active:border-white`}>
            <MenuIconOpenClose
              isMenuOpen={isMenuOpen}
              boxClassName={`z-50 md:h-[15px] md:w-[26px] sm:h-[14px] sm:w-[24px] h-[12px] w-[22px]`}
              innerClassName={`h-[2px] ${isMenuOpen ? "bg-main-white" : "bg-custom-gray-darker"}`}
            />
          </button>
          <div className="absolute lg:hidden">
            <SideMenu isOpen={isMenuOpen} activePageName={activePageName} />
          </div>
        </nav>
      </div>
      <div className={`${"lg:h-[80px] md:h-[60px] h-[55px]"}`}></div>
    </>
  );
};

export default Header;

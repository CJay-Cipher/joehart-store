"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { NAV_LINKS } from "@/constants/navLinks";
import MenuIconOpenClose from "./MenuIconOpenClose";
import HeaderBtnCTA from "./HeaderBtnCTA";
import perfume from "../../images/perfume.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { BsPersonPlus } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import ActionCounter from "./ActionCounter";
import SideMenu from "./SideMenu";

type HeaderProps = {
  activePageName?: string;
  wishlistCounter?: number;
  cartCounter?: number;
  hideActionCounter?: boolean;
  bgColor?: string;
};

// type Product = {
//   id: string;
//   name: string;
//   price: string;
//   oldPrice?: string;
//   imageUrl: string;
//   description?: string;
//   rating?: number;
// };

const Header = ({ activePageName, wishlistCounter, cartCounter, hideActionCounter, bgColor }: HeaderProps) => {
  // const [wishlistCount, setWishlistCount] = useState<number>(0);
  // const [cartCount, setCartCount] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState<boolean>();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMenuOutsideClick, setIsMenuOutsideClick] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to track timeout

  const handleOutsideMenuClick = (value: boolean) => {
    setIsMenuOpen(value);
    setIsMenuOutsideClick(true);
  };

  useEffect(() => {
    setShowHeader(true);

    // Clear existing timeout before setting a new one
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Hide the header after 5 seconds
    timeoutRef.current = setTimeout(() => {
      setShowHeader(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clean up the timeout when the component unmounts
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [cartCounter]);

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

  const handleMouseEnter = () => {
    setIsHeaderVisible(true);
    // Clear timeout when mouse enters
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    // Set a timeout to hide the header after 5 seconds when mouse leaves
    timeoutRef.current = setTimeout(() => {
      if (window.scrollY > 100 && !isMenuOpen) {
        setIsHeaderVisible(false);
      }
    }, 5000);
  };

  // reset isMenuOutsideClick after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMenuOutsideClick(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [isMenuOutsideClick]);

  // Toggle Side Menu
  const toggleMenu = () => {
    if (!isMenuOutsideClick) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`fixed z-100 top-0 w-full lg:h-[80px] md:h-[60px] h-[55px] backdrop-blur-md flex items-center justify-center transition-transform duration-300 ${
          !bgColor ? "bg-header-bg" : bgColor
        } ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}
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
            <NavLinks navLinks={NAV_LINKS} activePageName={activePageName} />
          </div>

          <div className="max-sm:absolute max-sm:w-full flex items-center max-sm:justify-center lg:gap-3 gap-2">
            {!hideActionCounter && (
              <div className="flex items-center gap-2">
                <ActionCounter href="/wishlist" label="Wishlist" Icon={IoMdHeartEmpty} counter={wishlistCounter || 0} />
                <ActionCounter href="/cart" label="Cart" Icon={IoCartOutline} counter={cartCounter || 0} />
              </div>
            )}
            <div className="max-lg:hidden flex items-center gap-2">
              <HeaderBtnCTA href="/register" buttonText="Sign Up" Icon={BsPersonPlus} isDarkBg={true} />
              <HeaderBtnCTA href="/login" buttonText="Login" Icon={FiLogIn} isDarkBg={false} />
            </div>
          </div>

          <button onClick={toggleMenu} className={`z-100 lg:hidden rounded-md p-2 border-transparent active:border-white`}>
            <MenuIconOpenClose
              isMenuOpen={isMenuOpen}
              boxClassName={`z-50 md:h-[15px] md:w-[26px] sm:h-[14px] sm:w-[24px] h-[12px] w-[22px]`}
              innerClassName={`h-[2px] ${isMenuOpen ? "bg-main-white" : "bg-main-black"}`}
            />
          </button>
          <div className="absolute lg:hidden">
            <SideMenu isOpen={isMenuOpen} activePageName={activePageName} handleOutsideMenuClick={handleOutsideMenuClick} />
          </div>
        </nav>
      </div>
      <div className={`${"lg:h-[80px] md:h-[60px] h-[55px]"}`}></div>
    </>
  );
};

export default Header;

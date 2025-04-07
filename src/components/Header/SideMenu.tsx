import React, { useEffect, useRef } from "react";
import NavLinks from "./NavLinks";
import HeaderBtnCTA from "./HeaderBtnCTA";
import { BsPersonPlus } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";

type SideMenuProps = {
  isOpen: boolean;
  activePageName?: string;
  handleOutsideMenuClick: (value: boolean) => void;
};
const navLinks = [
  { name: "HOME", href: "/" },
  { name: "DEALS", href: "/deals" },
  { name: "CATEGORIES", hasIcon: true },
  { name: "BEST SELLERS", href: "/best-sellers" },
  { name: "BRANDS", href: "/brands" },
];

const SideMenu = ({ isOpen, activePageName, handleOutsideMenuClick }: SideMenuProps) => {
  const sideMenuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (sideMenuRef.current && !sideMenuRef.current.contains(event.target as Node)) {
      handleOutsideMenuClick(false); // Close child if clicked outside
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  // prevent page scroll when side menu is open
  useEffect(() => {
    const mainbody = document.getElementById("main-body");

    if (mainbody) {
      if (isOpen) {
        mainbody.style.overflow = "hidden";
        // mainbody.style.marginRight = "16px";
      } else {
        mainbody.style.overflow = "auto";
        // mainbody.style.marginRight = "0px";
      }
    }
  }, [isOpen]);

  return (
    <div className={`z-10 ${isOpen && "fixed inset-0 top-0 left-0 w-full min-h-screen bg-main-black/70 mr-4"}`}>
      <div
        ref={sideMenuRef}
        className={`z-100 fixed top-0 right-0 flex flex-col justify-between h-full min-h-[100svh] w-max pt-[70px] pb-[20px] sm:pr-[140px] xs:pr-[120px] pr-[100px] text-main-white bg-main-black sm:rounded-l-[30px] rounded-l-[20px] transition-transform duration-200 border border-custom-gray-darker shadow-lg shadow-main-black overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-[120%]"
        }`}
      >
        <NavLinks navLinks={navLinks} activePageName={activePageName} />
        <div className="lg:hidden flex flex-col gap-2 w-max mx-[14px] mt-[50px]">
          <HeaderBtnCTA href="/register" buttonText="Sign Up" Icon={BsPersonPlus} isDarkBg={true} />
          <HeaderBtnCTA href="/login" buttonText="Login" Icon={FiLogIn} isDarkBg={false} />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;

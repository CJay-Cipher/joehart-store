import React from "react";
import NavLinks from "./NavLinks";
import HeaderBtnCTA from "./HeaderBtnCTA";
import { BsPersonPlus } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";

type SideMenuProps = {
  isOpen: boolean;
  activePageName?: string;
};
const navLinks = [
  { name: "HOME", href: "/" },
  { name: "DEALS", href: "/deals" },
  { name: "CATEGORIES", hasIcon: true },
  { name: "BEST SELLERS", href: "/best-sellers" },
  { name: "BRANDS", href: "/brands" },
];

const SideMenu = ({ isOpen, activePageName }: SideMenuProps) => {
  return (
    <div className={`z-10 ${isOpen && "fixed top-0 left-0 w-full min-h-screen bg-[#010307bd]"}`}>
      <div
        className={`z-100 fixed top-0 right-0 h-full min-h-screen w-max py-[70px] sm:pr-[140px] xs:pr-[120px] pr-[100px] text-main-white bg-main-black sm:rounded-l-[30px] rounded-l-[20px] transition-transform duration-200 border border-custom-gray-darker shadow-lg shadow-main-black overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <NavLinks navLinks={navLinks} activePageName={activePageName} />
        <div className="lg:hidden flex flex-col gap-2 w-max mx-[14px] mt-[100px]">
          <HeaderBtnCTA href="/register" buttonText="Sign Up" Icon={BsPersonPlus} isDarkBg={true} />
          <HeaderBtnCTA href="/login" buttonText="Login" Icon={FiLogIn} isDarkBg={false} />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;

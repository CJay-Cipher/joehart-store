import React from "react";
import NavLinks from "./NavLinks";

type SideMenuProps = {
  isOpen: boolean;
};
const navLinks = [
  { name: "HOME", href: "/" },
  { name: "DEALS", href: "/deals" },
  { name: "CATEGORIES", hasIcon: true },
  { name: "BEST SELLERS", href: "/best-sellers" },
  { name: "BRANDS", href: "/brands" },
];

const SideMenu = ({ isOpen }: SideMenuProps) => {
  return (
    <div className={`z-10 ${isOpen && "fixed top-0 left-0 w-full h-screen bg-[#03091a91]"}`}>
      <div
        className={`z-100 fixed top-0 right-0 h-max min-h-screen w-max py-[70px] sm:pr-[70px] pr-[50px] text-main-white bg-main-black transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <NavLinks navLinks={navLinks} />
      </div>
    </div>
  );
};

export default SideMenu;

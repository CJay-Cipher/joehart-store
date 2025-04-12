import React from "react";
import Link from "next/link";
import { IoChevronDownOutline } from "react-icons/io5";

type NavLink = {
  name: string;
  href?: string;
  hasIcon?: boolean;
};

type NavLinksProps = {
  navLinks: ReadonlyArray<NavLink>;
  activePageName?: string;
};

const NavLinks = ({ navLinks, activePageName }: NavLinksProps) => {
  return (
    <div className="flex max-lg:flex-col lg:items-center xl:gap-2 lg:gap-1 gap-1">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href || "#"}
          className={`xl:px-[15px] px-[10px] py-[4px] xl:text-[12px] lg:text-[10px] text-[14px] lg:rounded-[30px] rounded-r-[30px] lg:transition-color lg:duration-200 lg:text-main-black text-nowrap cursor-pointer group ${
            activePageName?.toUpperCase() === link.name.toUpperCase()
              ? "text-button-bg-hover lg:font-semibold font-medium lg:bg-main-white lg:border border-main-black"
              : "lg:font-medium font-normal lg:border border-transparent lg:hover:text-main-white lg:hover:bg-button-bg-hover lg:hover:border-button-bg-hover hover:text-main-white hover:bg-button-bg-hover active:bg-button-bg-hover"
          }`}
        >
          <div
            className={`max-lg:py-1  transition-transform duration-300 ease-in-out
              ${activePageName?.toUpperCase() === link.name.toUpperCase() ? "cursor-default" : `${!link.hasIcon && "max-lg:group-hover:translate-x-[10px]"}`} ${
              link.hasIcon && "flex items-center lg:gap-[2px] gap-4"
            }`}
          >
            {link.name}
            {link.hasIcon && <IoChevronDownOutline className="h-[16px] w-[16px] group-hover:animate-bounce" />}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;

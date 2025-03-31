import React from "react";
import Link from "next/link";
import { IoChevronDownOutline } from "react-icons/io5";

type NavLink = {
  name: string;
  href?: string;
  hasIcon?: boolean;
};

type NavLinksProps = {
  navLinks: NavLink[];
  activePageName?: string;
};

const NavLinks = ({ navLinks, activePageName }: NavLinksProps) => {
  return (
    <div className="flex max-lg:flex-col lg:items-center xl:gap-2 lg:gap-1 gap-1">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href || "#"}
          className={`px-[14px] py-[5px] xl:text-[12px] lg:text-[10px] text-[14px] lg:rounded-[30px] rounded-r-[30px] border lg:transition-color lg:duration-200 lg:text-main-text text-main-white text-nowrap cursor-pointer group ${
            activePageName?.toUpperCase() === link.name.toUpperCase()
              ? "font-bold bg-main-white border border-custom-slate-400"
              : "font-semibold border-transparent lg:hover:text-main-white lg:hover:bg-button-bg-hover hover:text-main-white hover:bg-button-bg-hover"
          }`}
        >
          <div
            className={`max-lg:py-1 max-lg:group-hover:translate-x-[10px] transition-transform duration-300 ease-in-out ${
              link.hasIcon && "flex items-center lg:gap-[2px] gap-4"
            }`}
          >
            {link.name}
            {link.hasIcon && <IoChevronDownOutline className="h-[16px] w-[16px]" />}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;

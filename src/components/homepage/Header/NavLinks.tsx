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
    <div className="flex items-center xl:gap-2 gap-1 max-lg:hidden">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href || "#"}
          className={`px-[14px] py-[5px] xl:text-[12px] text-[10px] rounded-[30px] border transition-color duration-200 text-main-text text-nowrap cursor-pointer ${
            link.hasIcon && "flex items-center gap-[2px]"
          } ${
            activePageName?.toUpperCase() === link.name.toUpperCase()
              ? "font-bold bg-main-white border border-custom-slate-400"
              : "font-semibold border-transparent hover:text-main-white hover:bg-button-bg-hover"
          }`}
        >
          {link.name}
          {link.hasIcon && <IoChevronDownOutline className="h-[16px] w-[16px]" />}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;

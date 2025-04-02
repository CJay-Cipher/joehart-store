import React from "react";

type menuIconProps = {
  isMenuOpen: boolean;
  boxClassName?: string;
  innerClassName?: string;
};
const MenuIconOpenClose = ({ isMenuOpen, boxClassName, innerClassName }: menuIconProps) => {
  return (
    <div className={`relative gap-[6px] min-h-[5px] min-w-[5px] ${boxClassName}`}>
      <div
        className={`absolute -translate-x-[50%] min-h-[1px] rounded-[5px] transition-all duration-300 ${
          isMenuOpen ? "top-[50%] left-[50%] w-[100%] rotate-[-45deg]" : "top-0 left-[70%] w-[70%]"
        } ${innerClassName}`}
      ></div>
      <div
        className={`absolute top-[50%] left-[50%] -translate-x-[50%] min-h-[1px] w-[100%] transition-all duration-300 rounded-[5px] ${
          isMenuOpen && "rotate-45 opacity-0"
        } ${innerClassName}`}
      ></div>
      <div
        className={`absolute -translate-x-[50%] min-h-[1px] rounded-[5px] transition-all duration-300 ${
          isMenuOpen ? "top-[50%] left-[50%] w-[100%] rotate-[45deg]" : "top-[100%] left-[30%] w-[70%]"
        } ${innerClassName}`}
      ></div>
    </div>
  );
};

export default MenuIconOpenClose;

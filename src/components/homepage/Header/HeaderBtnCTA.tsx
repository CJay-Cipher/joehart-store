import React from "react";

interface HeaderBtnCTAProps {
  href: string;
  buttonText?: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isDarkBg?: boolean;
}

const HeaderBtnCTA: React.FC<HeaderBtnCTAProps> = ({ href, buttonText, Icon, isDarkBg }) => {
  return (
    <a
      href={href}
      className={`flex items-center md:gap-3 gap-2 xl:text-[12px] text-[11px] border border-button-bg hover:border-transparent
        ${isDarkBg ? "text-main-white bg-button-bg" : "text-main-black bg-main-white"}
        md:px-[12px] md:py-[6px] px-[7px] py-[7px] text-nowrap font-medium 
        md:rounded-[5px] rounded-[50%] transition-color duration-100 
        hover:text-main-white hover:bg-button-bg-hover max-md:hover:scale-[1.15]`}
    >
      <span className="max-md:hidden">{buttonText}</span>
      <Icon className="xl:h-[15px] xl:w-[15px] h-[14px] w-[14px]" />
    </a>
  );
};

export default HeaderBtnCTA;

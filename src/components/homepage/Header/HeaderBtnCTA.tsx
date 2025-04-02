import React from "react";

type HeaderBtnCTAProps = {
  href: string;
  buttonText?: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isDarkBg?: boolean;
};

const HeaderBtnCTA = ({ href, buttonText, Icon, isDarkBg }: HeaderBtnCTAProps) => {
  return (
    <a
      href={href}
      className={`flex items-center md:gap-3 gap-2 xl:text-[12px] lg:text-[11px] text-[14px] border border-button-bg hover:border-transparent
        ${isDarkBg ? "text-main-white bg-button-bg" : "text-main-black bg-main-white"}
        xl:px-[20px] xl:py-[6px] md:px-[15px] md:py-[5px] px-[12px] py-[4px] text-nowrap lg:font-medium 
        rounded-[5px] transition-color duration-100 
        hover:text-main-white hover:bg-button-bg-hover`}
    >
      <span className="">{buttonText}</span>
      <Icon className="xl:h-[15px] xl:w-[15px] h-[14px] w-[14px]" />
    </a>
  );
};

export default HeaderBtnCTA;

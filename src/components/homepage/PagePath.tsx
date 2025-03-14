import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const PagePath = () => {
  return (
    <div className="mx-auto w-[100%] max-w-[1480px] md:mt-6 mt-4 lg:px-8 md:px-6 px-4">
      <div className="flex items-center md:gap-3 gap-2">
        <h4 className="md:text-[14px] text-[12px]">Home</h4>
        <div>{<FaChevronRight className="md:text-[12px] text-[10px]" />}</div>
        <h3 className="md:text-[14px] text-[12px] font-semibold">Best Sellers</h3>
      </div>
    </div>
  );
};

export default PagePath;

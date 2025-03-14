import React from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";

const ViewType = () => {
  return (
    <div className="flex-1 flex items-center max-lg:justify-center lg:gap-2 gap-4 max-lg:mt-2 rounded-[5px]">
      <BsFillGrid3X3GapFill
        size={40}
        className="text-custom-gray-dark lg:px-[4px] px-[5px] border border-custom-gray-dark lg:rounded-[5px] rounded-[3px] hover:text-custom-gray-darker active:text-custom-gray-darker hover:border-custom-gray-darker active:border-custom-gray-darker"
      />
      <FaList
        size={40}
        className="text-custom-gray-dark lg:px-[4px] px-[5px] border border-custom-gray-dark lg:rounded-[5px] rounded-[3px] hover:text-custom-gray-darker active:text-custom-gray-darker hover:border-custom-gray-darker active:border-custom-gray-darker"
      />
    </div>
  );
};

export default ViewType;

import React from "react";

const ShowingItems = () => {
  return (
    <div className="flex items-center gap-1">
      <span className="md:text-[16px] text-[14px] text-nowrap mr-2">Showing Items</span>
      <span className="md:text-[16px] text-[14px] font-semibold">1</span>
      <span className="md:text-[16px] text-[14px] font-semibold">-</span>
      <span className="md:text-[16px] text-[14px] font-semibold">20</span>
      <span className="md:text-[16px] text-[14px] font-semibold mx-1">of</span>
      <span className="md:text-[16px] text-[14px] font-semibold">65</span>
    </div>
  );
};

export default ShowingItems;

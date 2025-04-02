import React from "react";
import SortByDropdown from "./SortByDropdown";
import ProductSearch from "./ProductSearch";
import useStore from "@/stores/useStore";

const SearchSortBar = () => {
  const { products } = useStore(); // Get products from the store
  return (
    <div className="flex max-lg:flex-col items-center justify-between w-full lg:max-w-[750px] max-w-[450px] lg:gap-10 gap-3 max-lg:mb-4 p-2 bg-header-bg lg:rounded-[30px] rounded-[7px]">
      <ProductSearch products={products} />
      <SortByDropdown />
    </div>
  );
};

export default SearchSortBar;

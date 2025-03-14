import React from "react";
import SortByDropdown from "./SortByDropdown";
import ProductSearch from "./ProductSearch";

const products = [
  { id: 1, name: "Chanel No. 5", brand: "Chanel", description: "A classic fragrance." },
  { id: 2, name: "Dior Sauvage", brand: "Dior", description: "A fresh and spicy scent." },
  { id: 3, name: "Tom Ford Black Orchid", brand: "Tom Ford", description: "A luxurious and sensual fragrance." },
  { id: 4, name: "Chanel No. 4", brand: "Chanel", description: "A classic fragrance." },
  { id: 5, name: "Dior Pert", brand: "Dior", description: "A fresh and spicy scent." },
  { id: 6, name: "Black Orchid", brand: "Tom Ford", description: "A luxurious and sensual fragrance." },
  // Add more products as needed
];

const SearchSortBar = () => {
  return (
    <div className="flex max-lg:flex-col items-center justify-between w-full lg:max-w-[750px] max-w-[420px] lg:gap-10 gap-3 max-lg:mb-4 p-2 bg-header-bg lg:rounded-[30px] rounded-[7px]">
      <ProductSearch products={products} />
      <SortByDropdown />
    </div>
  );
};

export default SearchSortBar;

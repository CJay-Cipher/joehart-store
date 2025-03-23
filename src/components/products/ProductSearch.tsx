import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
};

type ProductSearchProps = {
  products: Product[];
};

const ProductSearch: React.FC<ProductSearchProps> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = products.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredProducts(filtered);
  };

  return (
    <div className="relative w-full max-w-[400px]">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="h-[34px] w-full md:px-4 px-2 bg-main-white lg:rounded-[30px] rounded-[5px] focus:outline-none focus:ring focus:ring-custom-blue placeholder:text-custom-gray placeholder:md:text-[16px] text-[14px] "
        />
        <IoSearchOutline className="absolute top-[6px] xl:right-[15px] right-[10px] w-5 h-5" />
      </div>
      {isFocused && filteredProducts.length > 0 && (
        <ul className="absolute z-50 top-[22px] w-full mt-4 max-h-[200px] overflow-y-auto sm:p-4 p-2 bg-main-white shadow-lg lg:rounded-l-[15px] rounded-l-[5px] border border-transparent hover:border-[#2762DA] hover:shadow-custom-blue-light">
          {filteredProducts.map((product) => (
            <li key={product.id} className="py-2 border-b border-gray-200">
              <h3 className="md:text-[14px] text-[12px] font-semibold">{product.name}</h3>
              <p className="md:text-[12px] text-[10px] text-gray-600">{product.brand}</p>
              <p className="md:text-[10px] text-[8px] text-gray-500">{product.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductSearch;

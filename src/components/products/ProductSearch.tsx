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
          className="h-[34px] w-full px-4 bg-main-white lg:rounded-[30px] rounded-[5px] focus:outline-none focus:ring focus:ring-custom-blue"
        />
        <IoSearchOutline className="absolute top-[6px] xl:right-[15px] right-[10px] w-5 h-5" />
      </div>
      {isFocused && filteredProducts.length > 0 && (
        <ul className="absolute z-50 top-[22px] w-full mt-4 max-h-[200px] overflow-y-auto p-4 bg-main-white shadow-lg lg:rounded-[15px] rounded-[5px] ">
          {filteredProducts.map((product) => (
            <li key={product.id} className="py-2 border-b border-gray-200">
              <h3 className="text-base font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.brand}</p>
              <p className="text-xs text-gray-500">{product.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductSearch;

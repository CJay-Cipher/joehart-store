import React from "react";
import Image from "next/image";
import ShowingItems from "./ShowingItems";
import SearchSortBar from "./SearchSortBar";
import { IoMdHeart } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
// import ViewType from "./ViewType";

type ProductsProps = {
  wishlistIncreament?: () => void;
  wishlistDecreament?: () => void;
  cartIncrement?: () => void;
  cartDecrement?: () => void;
};

type Product = {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  imageUrl: string;
  description?: string;
  rating?: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "Scandal Eau de Parfum",
    price: "23000.00",
    oldPrice: "30000.00",
    imageUrl: "https://fragrances.com.ng/media/catalog/product/cache/3f352caa9845cb86b827745a9fdca65c/b/v/bvlgari_man_in_black_parfum_100ml.jpg",
    description: "Amour Guidance 46 Extrait 100ml",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Valentino Uomo",
    price: "25000.00",
    oldPrice: "35000.00",
    imageUrl: "https://fragrances.com.ng/media/catalog/product/cache/3f352caa9845cb86b827745a9fdca65c/f/r/french_avenue_azure_aoud_edp_100ml.jpeg",
    description: "Valentino Uomo Eau de Toilette",
    rating: 4.0,
  },
  {
    id: 3,
    name: "Burberry Brit",
    price: "21000.00",
    oldPrice: "25000.00",
    imageUrl: "https://fragrances.com.ng/media/catalog/product/cache/3f352caa9845cb86b827745a9fdca65c/k/h/khadlaj_karus_amber_gold_edp_100ml-2.jpg",
    description: "Burberry Brit Eau de Toilette",
    rating: 4.2,
  },
  {
    id: 4,
    name: "YSL La Nuit",
    price: "30000.00",
    oldPrice: "40000.00",
    imageUrl: "https://fragrances.com.ng/media/catalog/product/cache/3f352caa9845cb86b827745a9fdca65c/a/f/afnan_his_highness_111_edp_100ml-6.jpg",
    description: "Yves Saint Laurent La Nuit De L'Homme",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Dior Sauvage",
    price: "35000.00",
    oldPrice: "45000.00",
    imageUrl: "https://fragrances.com.ng/media/catalog/product/cache/3f352caa9845cb86b827745a9fdca65c/f/r/french_avenue_sultan_the_conqueror_edp_80ml.jpeg",
    description: "Dior Sauvage Eau de Toilette",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Gucci Guilty",
    price: "28000.00",
    oldPrice: "34000.00",
    imageUrl: "https://fragrances.com.ng/media/catalog/product/cache/3f352caa9845cb86b827745a9fdca65c/a/r/aro_fac_suger_intense_edp_100ml.jpeg",
    description: "Gucci Guilty Pour Homme",
    rating: 4.6,
  },
  {
    id: 7,
    name: "Chanel No. 5",
    price: "45000.00",
    oldPrice: "55000.00",
    imageUrl:
      "https://fragrances.com.ng/media/catalog/product/cache/3f352caa9845cb86b827745a9fdca65c/l/a/lattafa_yara_yara_candy_5th_anniversary_edition_2_piece_gift_set_edp_100ml-1.jpg",
    description: "Chanel No. 5 Eau de Parfum",
    rating: 5.0,
  },
  {
    id: 8,
    name: "Hermès Terre",
    price: "32000.00",
    oldPrice: "34000.00",
    imageUrl: "https://fragrances.com.ng/media/catalog/product/cache/3f352caa9845cb86b827745a9fdca65c/v/i/viktor_rolf_spice_bomb_dark_leather_edp_90ml.jpeg",
    description: "Hermès Terre D'Hermès",
    rating: 4.8,
  },
  {
    id: 9,
    name: "Versace Dylan Blue",
    price: "27000.00",
    oldPrice: "33000.00",
    imageUrl: "https://fragrances.com.ng/media/catalog/product/cache/3f352caa9845cb86b827745a9fdca65c/v/a/valentino_born_in_roma_coral_fantasy_edt_100ml.jpeg",
    description: "Versace Dylan Blue Pour Homme",
    rating: 4.3,
  },
  {
    id: 10,
    name: "Paco Rabanne 1 Million",
    price: "24000.00",
    oldPrice: "30000.00",
    imageUrl: "https://fragrances.com.ng/media/catalog/product/cache/3f352caa9845cb86b827745a9fdca65c/y/v/yves_saint_laurent_black_opium_glitter_edp_90ml.jpg",
    description: "Paco Rabanne 1 Million Eau de Toilette",
    rating: 4.4,
  },
  {
    id: 11,
    name: "Dior Sauvage",
    price: "35000.00",
    oldPrice: "45000.00",
    imageUrl: "https://fragrances.com.ng/media/catalog/product/cache/3f352caa9845cb86b827745a9fdca65c/f/r/french_avenue_sultan_the_conqueror_edp_80ml.jpeg",
    description: "Dior Sauvage Eau de Toilette",
    rating: 4.9,
  },
  {
    id: 12,
    name: "Gucci Guilty",
    price: "28000.00",
    oldPrice: "34000.00",
    imageUrl: "https://fragrances.com.ng/media/catalog/product/cache/3f352caa9845cb86b827745a9fdca65c/a/r/aro_fac_suger_intense_edp_100ml.jpeg",
    description: "Gucci Guilty Pour Homme",
    rating: 4.6,
  },
  {
    id: 13,
    name: "Chanel No. 5",
    price: "45000.00",
    oldPrice: "55000.00",
    imageUrl:
      "https://fragrances.com.ng/media/catalog/product/cache/3f352caa9845cb86b827745a9fdca65c/l/a/lattafa_yara_yara_candy_5th_anniversary_edition_2_piece_gift_set_edp_100ml-1.jpg",
    description: "Chanel No. 5 Eau de Parfum",
    rating: 5.0,
  },
  {
    id: 14,
    name: "Hermès Terre",
    price: "32000.00",
    oldPrice: "40000.00",
    imageUrl: "https://fragrances.com.ng/media/catalog/product/cache/3f352caa9845cb86b827745a9fdca65c/v/i/viktor_rolf_spice_bomb_dark_leather_edp_90ml.jpeg",
    description: "Hermès Terre D'Hermès",
    rating: 4.8,
  },
  {
    id: 15,
    name: "Versace Dylan Blue",
    price: "27000.00",
    oldPrice: "33000.00",
    imageUrl: "https://fragrances.com.ng/media/catalog/product/cache/3f352caa9845cb86b827745a9fdca65c/v/a/valentino_born_in_roma_coral_fantasy_edt_100ml.jpeg",
    description: "Versace Dylan Blue Pour Homme",
    rating: 4.3,
  },
  {
    id: 16,
    name: "Paco Rabanne 1 Million",
    price: "24000.00",
    oldPrice: "30000.00",
    imageUrl: "https://fragrances.com.ng/media/catalog/product/cache/3f352caa9845cb86b827745a9fdca65c/y/v/yves_saint_laurent_black_opium_glitter_edp_90ml.jpg",
    description: "Paco Rabanne 1 Million Eau de Toilette abanne 1 Million Eau de Toilette",
    rating: 4.4,
  },
];

const Products = ({ wishlistIncreament, wishlistDecreament, cartIncrement, cartDecrement }: ProductsProps) => {
  return (
    <div className="mx-auto w-[100%] max-w-[1480px] mt-4 lg:px-8 md:px-6 px-4">
      <div className="flex max-lg:flex-col-reverse lg:justify-between items-center lg:gap-8 gap-3">
        <ShowingItems />
        {/* <ViewType /> */}
        <SearchSortBar />
      </div>

      {/*  PRODUCTS GRID */}
      <div className="flex flex-wrap justify-center md:gap-4 gap-3 lg:mt-8 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex sm:flex-col justify-center max-sm:items-center xl:max-w-[270px] lg:max-w-[260px] md:max-w-[250px] sm:max-w-[240px] max-w-[420px] w-full bg-custom-slate-100 border border-shadow xl:rounded-[15px] rounded-[10px] overflow-hidden md:shadow-lg shadow-md hover:shadow-custom-blue-light transition-transform transform hover:scale-103"
          >
            <div className="flex sm:justify-center items-center sm:w-full w-max md:p-4 sm:p-3 p-2 bg-main-white xl:rounded-[15px] rounded-[10px] sm:border-b border-r border-shadow">
              <Image
                width={100}
                height={100}
                src={product.imageUrl}
                alt={product.name}
                className="w-[150px] max-sm:w-[180px] object-cover xl:rounded-[15px] md:rounded-[10px] rounded-[5px] overflow-hidden"
              />
            </div>
            <div className="md:p-3 p-2 flex-1 flex flex-col">
              <h2 className="font-bold lg:text-[16px] text-[14px]">{product.name}</h2>
              <p className="text-custom-gray lg:text-[12px] text-[10px] sm:truncate">{product.description}</p>
              <div className="flex items-center">
                {product.rating && (
                  <span className={`text-yellow-500`}>
                    {"★".repeat(Math.floor(product.rating))}
                    {"☆".repeat(5 - Math.floor(product.rating))}
                  </span>
                )}
                <span className="ml-2 lg:text-[14px] text-[12px] text-custom-gray">({product.rating})</span>
              </div>
              <div className="">
                <div className="flex items-center max-sm:flex-wrap sm:gap-4">
                  <p className="font-semibold lg:text-[16px] text-[14px] mr-4">₦ {Number(product.price).toLocaleString()}</p>
                  <p className="lg:text-[12px] text-[10px] text-custom-gray font-medium line-through">{product.oldPrice}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 mt-2">
                    <button className="flex items-center md:gap-2 gap-1 lg:text-[14px] text-[12px] text-button-bg border border-button-bg py-0 sm:px-3 px-2 rounded hover:border-transparent hover:text-main-white hover:bg-button-bg-hover ">
                      <span>View</span>
                    </button>
                    <button className="flex items-center md:gap-2 gap-1 lg:text-[14px] text-[12px] text-custom-gray-dark border border-custom-gray-dark py-1 sm:px-3 px-2 rounded hover:text-custom-red hover:border-custom-red">
                      <IoMdHeart className="xl:h-[18px] xl:w-[18px] h-[16px] w-[16px]" />
                    </button>
                  </div>
                  <button className="flex justify-center items-center md:gap-2 gap-1 lg:text-[14px] text-[12px] bg-button-bg text-main-white py-1 sm:px-3 px-2 rounded hover:bg-button-bg-hover">
                    <span>Add to Cart</span>
                    <IoCartOutline className="xl:h-[17px] xl:w-[17px] h-[15px] w-[15px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center mx-auto mt-8">
        <h2>Add and Remove from Wishlist Test</h2>
        <div className="flex w-[300px] p-1 border border-red-400">
          <button
            onClick={wishlistIncreament}
            className="xl:w-[200px] xl: border-custom-gray-darkh-[50px] [5px]:w-[185px] lg:h-[45px] md:w-[170px] md:h-[40px] w-[155px] h-[35px] flex justify-center items-center bg-button-hero-bg hover:bg-button-hero-bg-hover border border-main-white rounded-[50px] text-nowrap xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-semibold text-main-white"
          >
            Add
          </button>
          <button
            onClick={wishlistDecreament}
            className="xl:w-[200px] xl:h-[50px] lg:w-[185px] lg:h-[45px] md:w-[170px] md:h-[40px] w-[155px] h-[35px] flex justify-center items-center bg-button-hero-bg hover:bg-button-hero-bg-hover border border-main-white rounded-[50px] text-nowrap xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-semibold text-main-white"
          >
            Remove
          </button>
        </div>

        <h2 className="mt-4">Add and Remove from cart Test</h2>
        <div className="flex w-[300px] p-1 border border-red-400">
          <button
            onClick={cartIncrement}
            className="xl:w-[200px] xl:h-[50px] lg:w-[185px] lg:h-[45px] md:w-[170px] md:h-[40px] w-[155px] h-[35px] flex justify-center items-center bg-button-hero-bg hover:bg-button-hero-bg-hover border border-main-white rounded-[50px] text-nowrap xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-semibold text-main-white"
          >
            Add
          </button>
          <button
            onClick={cartDecrement}
            className="xl:w-[200px] xl:h-[50px] lg:w-[185px] lg:h-[45px] md:w-[170px] md:h-[40px] w-[155px] h-[35px] flex justify-center items-center bg-button-hero-bg hover:bg-button-hero-bg-hover border border-main-white rounded-[50px] text-nowrap xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-semibold text-main-white"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;

"use client";

import React, { useRef } from "react";
import Image from "next/image";
// import Link from "next/link";
import forMen from "../../../images/forMen.png";
import forWomen from "../../../images/forWomen.png";
import bestDeals from "../../../images/bestDeals.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Link from "next/link";

const ExploreCarousel = () => {
  // Specify the type for the ref as HTMLDivElement
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -320, // Scroll left by 320px
        behavior: "smooth", // Optional: Smooth scrolling
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 320, // Scroll right by 320px
        behavior: "smooth", // Optional: Smooth scrolling
      });
    }
  };
  const ExploreCards = [
    { bgImage: forMen, href: "#", title: "FOR MEN", subtitle: "Explore classic, exotic and authentic perfumes for Men" },
    { bgImage: forWomen, href: "#", title: "FOR WOMEN", subtitle: "Explore classic, exotic and authentic perfumes for Women" },
    { bgImage: bestDeals, href: "#", title: "BEST DEALS", subtitle: "Explore the BEST deals on JoeHart Store" },
    { bgImage: forWomen, href: "#", title: "BEST DEALS", subtitle: "Explore the BEST deals on JoeHart Store" },
  ];

  return (
    <div className="relative mx-auto w-[100%] max-w-[1480px] md:mt-6 mt-4 lg:px-8 md:px-6 px-4">
      <div className="flex justify-between gap-2 overflow-x-auto hide-scrollbar" ref={scrollRef}>
        {ExploreCards.map((card, index) => (
          <div key={index} className="relative">
            <Image src={card.bgImage} alt="card image" className="xl:min-w-[450px] md:min-w-[400px] sm:min-w-[350px] min-w-[320px]" />
            <div className="absolute w-full h-full flex flex-col justify-between top-0 left-0 text-main-white lg:p-4 p-3">
              <div className="lg:max-w-[45%] max-w-[40%] self-end text-wrap md:mt-6 mt-3">
                <h2 className="lg:max-w-[150px] max-w-[130px] mx-auto lg:text-[32px] text-[26px] font-bold text-center leading-[1.1]">{card.title}</h2>
                <p className="lg:text-[12px] text-[11px] text-center font-medium mt-2">{card.subtitle}</p>
              </div>
              <Link
                key={index}
                href={card.href}
                className="w-max md:py-2 md:px-5 py-2 px-4 text-nowrap lg:text-[12px] text-[10px] font-semibold text-main-white bg-main-black border border-main-white hover:bg-button-bg-hover active:bg-button-hero-bg-hover rounded-[50px]"
              >
                EXPLORE NOW
              </Link>
            </div>
          </div>
        ))}
        <button
          className="max-sm:hidden absolute top-[45%] left-[40px] w-[35px] h-[35px] flex justify-center items-center bg-header-bg hover:bg-main-white animate-pulse hover:animate-none cursor-pointer rounded-[50%]"
          onClick={scrollLeft}
        >
          {<FaChevronLeft />}
        </button>
        <button
          className="max-sm:hidden absolute top-[45%] right-[40px] w-[35px] h-[35px] flex justify-center items-center bg-header-bg hover:bg-main-white animate-pulse hover:animate-none cursor-pointer rounded-[50%]"
          onClick={scrollRight}
        >
          {<FaChevronRight />}
        </button>
      </div>
    </div>
  );
};

export default ExploreCarousel;

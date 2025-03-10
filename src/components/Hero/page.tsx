import React from "react";
import Image from "next/image";
import HeroImage from "../../images/HeroImageSmall.png";
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-screen w-full font-montserrat">
      <div
        className="mx-auto w-[100%] max-w-[2000px] p-0 m-0"
        style={{
          backgroundImage: `url(${HeroImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <div className="flex flex-col justify-center w-[80%] max-w-[1440px] h-full space-y-4 mx-auto px-4">
          <h1 className=" text-[70px] text-main-white font-[700] max-w-[750px] leading-[1]">Discover The Best Deals On Top Fragrances</h1>
          <p className="text-main-white text-[20px] max-w-[500px] leading-[1.3] tracking-[1.1px]">
            Explore our exquisite collection of perfumes, crafted to captivate your senses and enhance your unique style.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href="">
              <FaFacebook className="w-[24px] h-[24px] text-main-white" />
            </a>
            <a href="">
              <BsInstagram className="w-[24px] h-[24px] text-main-white" />
            </a>
            <a href="">
              <FaXTwitter className="w-[24px] h-[24px] text-main-white" />
            </a>
            <a href="">
              <FaTiktok className="w-[24px] h-[24px] text-main-white" />
            </a>
          </div>
          <button className="w-[200px] h-[50px] flex justify-center items-center mt-2 bg-button-hero-bg hover:bg-button-hero-bg-hover border border-main-white rounded-[5px]">
            <a href="" className="text-nowrap text-[20px] font-semibold text-main-white">
              SHOP NOW
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

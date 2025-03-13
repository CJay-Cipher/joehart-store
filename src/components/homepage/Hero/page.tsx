"use client";

import React from "react";
// import Image from "next/image";
import HeroImage from "../../../images/HeroImageSmall.png";
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Hero = () => {
  const socialLinks = [
    { href: "#", icon: <FaFacebook /> },
    { href: "#", icon: <BsInstagram /> },
    { href: "#", icon: <FaXTwitter /> },
    { href: "#", icon: <FaTiktok /> },
  ];

  return (
    <div className="w-full font-montserrat lg:mt-[80px] md:mt-[60px] mt-[50px]">
      <div
        className="mx-auto w-[100%] max-w-[2000px] xl:h-[500px] lg:h-[450px] md:h-[400px] h-[350px] p-0 m-0"
        style={{
          backgroundImage: `url(${HeroImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-center w-[100%] max-w-[1480px] h-full xl:space-y-4 md:space-y-3 space-y-2 mx-auto lg:px-8 md:px-6 px-4">
          <h1 className="xl:text-[70px] lg:text-[60px] md:text-[45px] text-[35px] text-main-white font-[700] lg:max-w-[750px] md:max-w-[500px] max-w-[350px] leading-[1]">
            Discover The Best Deals On Top Fragrances
          </h1>
          <p className="text-main-white xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] md:font-medium lg:max-w-[500px] md:max-w-[400px] max-w-[300px] leading-[1.3] tracking-[0.5px]">
            Explore our exquisite collection of perfumes, crafted to captivate your senses and enhance your unique style.
          </p>
          <div className="flex items-center gap-4 mt-2">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {React.cloneElement(link.icon, { className: "xl:w-[24px] xl:h-[24px] md:w-[20px] md:h-[20px] w-[18px] h-[18px] text-main-white" })}
              </a>
            ))}
          </div>
          <button className="xl:w-[200px] xl:h-[50px] lg:w-[185px] lg:h-[45px] md:w-[170px] md:h-[40px] w-[155px] h-[35px] flex justify-center items-center mt-2 bg-button-hero-bg border border-main-white hover:bg-button-hero-bg-hover active:bg-button-hero-bg-hover rounded-[50px] text-nowrap xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-semibold text-main-white cursor-pointer">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

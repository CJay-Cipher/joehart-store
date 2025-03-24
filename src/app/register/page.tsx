import React from "react";
import Image from "next/image";
import signUpImage from "../../images/signUpImage.png";
import gridBg from "../../images/bg-grid-lighter.svg";
import SignUpForm from "./SignUpForm";

const Register = () => {
  return (
    <div className="font-montserrat h-screen flex justify-center items-center">
      <div className="h-screen max-h-[1200px] w-full max-w-[2000px] flex mx-auto shadow-2xl">
        <div className="relative h-full max-md:hidden w-[40%] overflow-hidden">
          <Image width={200} height={200} src={signUpImage} alt="side image" className="w-full h-full object-center object-cover" />
          <div className="absolute top-0 flex flex-col justify-center h-full z-10 xl:p-12 lg:p-8 md:p-10 p-8">
            <h1 className="xl:text-[44px] lg:text-[36px] md:text-[34px] text-[28px] text-main-white font-bold leading-[1.2] tracking-tight">
              Explore the Best <br /> Deals on Premium Fragrances
            </h1>
            <p className="xl:text-[16px] lg:text-[14px] text-[12px] text-main-white pl-[2px]">Discover The Best Deals on top Fragrances</p>
          </div>
        </div>
        <div className="relative flex flex-1 overflow-y-auto bg-linear-to-b from-custom-red-light to-shadow">
          <Image width={200} height={200} src={gridBg} alt="abstract" className="absolute w-full h-full object-center object-cover" />
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default Register;

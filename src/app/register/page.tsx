import React from "react";
import Image from "next/image";
import signUpImage from "../../images/signUpImage.png";
import abstractBg from "../../images/waveBg.png";
import SignUpForm from "./SignUpForm";

const Register = () => {
  return (
    <div className="font-montserrat flex justify-center items-center w-full h-max min-h-screen">
      <div className="w-full flex">
        <div className="relative max-lg:hidden overflow-hidden">
          <Image width={200} height={200} src={signUpImage} alt="side image" className="h-max min-h-screen w-[600px] object-center object-cover" />
          <div className="absolute top-0 flex flex-col justify-center h-full z-10 xl:px-10 px-8">
            <h1 className="xl:text-[40px] lg:text-[34px] text-[28px] text-main-white font-bold leading-[1.2] tracking-tight">
              Explore the Best Deals on Premium Fragrances
            </h1>
            <p className="xl:text-[16px] lg:text-[14px] text-[12px] text-main-white pl-[2px]">Discover The Best Deals on top Fragrances</p>
          </div>
        </div>
        <div className="relative overflow-y-auto">
          <Image
            width={200}
            height={200}
            src={abstractBg}
            alt="abstract"
            className="h-max md:max-h-screen min-h-screen lg:w-[70vw] w-screen object-center object-cover"
          />
          <div className="absolute top-0 left-0 flex justify-center items-center h-full w-full z-10">
            <div className="md:max-w-[500px] max-w-[400px] w-full bg-main-white md:m-6 m-4 md:py-10 py-8 p-4 border-shadow lg:rounded-[20px] rounded-[15px] shadow-xl ">
              <div className="text-center md:pb-10 pb-8">
                <h1 className="lg:text-[36px] md:text-[30px] text-[26px] text-button-bg font-bold leading-[1.2] tracking-tight">Sign Up</h1>
                <p className="md:text-[14px] text-[12px] text-custom-gray pl-[2px]">Register to see amazing deals</p>
              </div>
              <SignUpForm />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Register;

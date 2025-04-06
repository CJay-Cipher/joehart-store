import React from "react";
import Image from "next/image";
import signUpImage from "../../images/sideBg.png";
import gridBg from "../../images/bg-grid-lighter.svg";
import Header from "@/components/Header/page";
import SignUpForm from "./SignUpForm";
import AuthPageContent from "@/components/auth/AuthPageContent";

const RegisterPage = () => {
  return (
    <div className="font-montserrat h-[100svh] flex justify-center items-center">
      <div className="h-[100svh] max-h-[1500px] w-full max-page-width flex mx-auto lg:pt-[80px] md:pt-[60px] pt-[55px] shadow-2xl">
        <Header hideActionCounter={true} />
        <div className="relative h-full max-md:hidden w-[40%] overflow-hidden">
          <Image quality={100} src={signUpImage} alt="side image" className="w-full h-full object-center object-cover" />
          <AuthPageContent headerText="Join Us Today to Discover the Finest Deals on Premium Fragrances!" subText="Discover The Best Deals on top Fragrances" />
        </div>
        <div className="relative flex items-center flex-col flex-1 overflow-y-auto bg-linear-to-bl from-custom-red-light to-custom-slate-400">
          <Image quality={100} src={gridBg} alt="abstract" className="absolute w-full h-full object-center object-cover" />
          <div className="z-20 flex-1 w-full flex justify-center items-center flex-col ">
            <AuthPageContent
              headerText="Join Us Today to Discover the Finest Deals on Premium Fragrances!"
              subText="Discover The Best Deals on top Fragrances"
              hideContent={true}
            />
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

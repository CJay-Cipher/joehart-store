import React from "react";
import Image from "next/image";
import gridBg from "../../images/bg-grid-lighter.svg";
import perfume from "../../images/perfume.png";
import Link from "next/link";
import ForgotPasswordForm from "./ForgotPasswordForm";
import AuthPageContent from "@/components/auth/AuthPageContent";

const ForgotPassword = () => {
  return (
    <div className="font-montserrat h-[100svh] flex justify-center items-center">
      <div className="h-[100svh] max-h-[1500px] w-full max-page-width flex mx-auto shadow-2xl">
        <div className="relative flex items-center flex-col flex-1 overflow-y-auto bg-linear-to-bl from-custom-red-light to-custom-slate-400">
          <Image quality={100} src={gridBg} alt="abstract" className="absolute w-full h-full object-center object-cover" />
          <Link
            href="/"
            className="z-50 self-start lg:h-12 h-8 lg:p-4 p-2 flex justify-center items-center gap-[3px] xl:text-[18px] text-[16px] text-nowrap font-bold text-main-black tracking-[0.9px] cursor-pointer"
          >
            <Image src={perfume} alt="Perfume" className="xl:w-[26px] xl:h-[26px] md:w-[24px] md:h-[24px] w-[20px] h-[20px]" />
            <span className="font-outfit translate-y-[0.8px] xl:text-[18px] md:text-[16px] text-[14px]">JoeHart </span>
          </Link>
          <div className="z-20 flex-1 w-full flex justify-center items-center flex-col">
            <AuthPageContent
              headerText="Reset Your Account Password"
              subText="No worries! Just provide your email, and we'll guide you through the process."
              hideContent={true}
              isDefault={true}
            />
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

import React from "react";
import Image from "next/image";
import gridBg from "../../images/bg-grid-lighter.svg";
import perfume from "../../images/perfume.png";
import Link from "next/link";
import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <div className="font-montserrat h-screen flex justify-center items-center">
      <div className="h-screen max-h-[1500px] w-full max-w-[2000px] flex mx-auto shadow-2xl">
        <div className="relative flex items-center flex-col flex-1 overflow-y-auto bg-linear-to-bl from-custom-red-light to-custom-slate-400">
          <Link
            href="/"
            className="z-50 self-start font-montserrat lg:h-12 h-8  lg:p-4 p-2 flex justify-center items-center gap-[3px] xl:text-[18px] text-[16px] text-nowrap font-bold text-main-black tracking-[0.9px] cursor-pointer"
          >
            <Image src={perfume} alt="Perfume" className="w-[26px] h-[26px]" />
            <span className="translate-y-[1px]">JoeHart </span>
          </Link>
          <Image width={200} height={200} src={gridBg} alt="abstract" className="absolute w-full h-full object-center object-cover" />
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

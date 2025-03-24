import React from "react";
import Image from "next/image";
import signUpImage from "../../images/sideBg.png";
import gridBg from "../../images/bg-grid-lighter.svg";
import SignUpForm from "./SignUpForm";
import perfume from "../../images/perfume.png";
import SignUpContent from "./SignUpContent";

const Register = () => {
  return (
    <div className="font-montserrat h-screen flex justify-center items-center">
      <div className="h-screen max-h-[1500px] w-full max-w-[2000px] flex mx-auto shadow-2xl">
        <div className="relative h-full max-md:hidden w-[40%] overflow-hidden">
          <Image width={200} height={200} src={signUpImage} alt="side image" className="w-full h-full object-center object-cover" />
          <SignUpContent />
        </div>
        <div className="relative flex items-center flex-col flex-1 overflow-y-auto bg-linear-to-bl from-custom-red-light to-custom-slate-400">
          <div className="font-montserrat lg:p-4 p-2 flex justify-center items-center gap-[5px] xl:text-[18px] text-[16px] text-nowrap font-bold text-main-black tracking-[0.9px]">
            JoeHart
            <Image src={perfume} alt="Perfume" className="w-[26px] h-[26px]" />
            Fragrance
          </div>
          <SignUpContent hideContent={true} />
          <Image width={200} height={200} src={gridBg} alt="abstract" className="absolute w-full h-full object-center object-cover" />
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default Register;

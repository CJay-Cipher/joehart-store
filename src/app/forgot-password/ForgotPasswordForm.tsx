"use client";

import InputField from "@/components/input-components/InputField";
import Link from "next/link";
import React, { useState } from "react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="flex justify-center items-center min-h-max w-full z-10 px-4">
      <div className="bg-main-white w-full xl:max-w-[500px] md:max-w-[450px] xs:max-w-[400px] xl:py-8 lg:py-6 p-4 border border-shadow lg:rounded-[20px] rounded-[15px] shadow-xl">
        <div className="text-center md:space-y-2 space-y-1 xl:pb-10 md:pb-8 pb-6">
          <h1 className="lg:text-[28px] md:text-[24px] text-[20px] text-custom-blue font-bold leading-[1.2] tracking-tight">Forgot Password</h1>
          <p className="max-md:font-light md:text-[13px] text-[12px] text-main-black pl-[2px]">We will send a link to reset your password to your mail.</p>
        </div>
        <form action="" className="flex flex-col items-center">
          <div className="w-full flex flex-col items-center md:gap-3 gap-2">
            <div className="w-full">
              <InputField label="Email" type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="flex items-center w-full md:gap-6 gap-4">
            <Link
              href="/login"
              className="flex justify-center items-center xl:max-w-[380px] md:max-w-[340px] xs:max-w-[320px] w-full xl:h-[45px] md:h-[40px] 2xs:h-[38px] h-[37px] md:mt-10 mt-8 lg:text-[18px] md:text-[16px] text-[14px] text-main-black font-semibold bg-main-white border border-custom-slate-500 hover:text-main-white hover:bg-main-black hover:border-transparent rounded-[5px] hover:shadow-md"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="flex justify-center items-center xl:max-w-[380px] md:max-w-[340px] xs:max-w-[320px] w-full xl:h-[45px] md:h-[40px] 2xs:h-[38px] h-[37px] md:mt-10 mt-8 lg:text-[18px] md:text-[16px] text-[14px] text-main-white font-semibold bg-custom-blue hover:bg-custom-blue-2 rounded-[5px] hover:shadow-md"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;

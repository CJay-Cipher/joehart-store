"use client";

import InputField from "@/components/input-components/InputField";
import Link from "next/link";
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="md:flex-1 flex justify-center items-center min-h-max w-full z-10 md:pt-6 p-4">
      <div className="bg-main-white w-full xl:max-w-[500px] lg:max-w-[420px] md:max-w-[380px] xs:max-w-[350px] xl:p-6 lg:p-5 p-4 border border-shadow lg:rounded-[20px] rounded-[15px] shadow-xl">
        <div className="text-center xl:pb-10 md:pb-8 pb-6">
          <h1 className="lg:text-[30px] md:text-[28px] text-[22px] text-button-bg font-bold leading-[1.2] tracking-tight">Login</h1>
          <p className="md:text-[13px] text-[12px] text-custom-gray pl-[2px]">Sign in to order amazing deals</p>
        </div>
        <form action="" className="flex flex-col items-center">
          <div className="w-full flex flex-col items-center md:gap-3 gap-2">
            <div className="w-full">
              <InputField label="Email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="w-full">
              <InputField label="Password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>

          <button className="xl:max-w-[300px] md:max-w-[260px] xs:max-w-[240px] w-full xl:h-[45px] md:h-[40px] 2xs:h-[38px] h-[37px] md:mt-10 mt-8 lg:text-[18px] md:text-[16px] text-[14px] text-main-white font-semibold bg-custom-blue hover:bg-custom-blue-2 rounded-[30px] hover:shadow-md">
            Create Account
          </button>
          <Link href="/forgot-password" className="md:mt-4 mt-3 lg:text-[14px] text-[12px] text-center text-custom-blue-2 hover:text-custom-blue">
            Forgot password?
          </Link>
          <p className="md:mt-4 mt-3 lg:text-[14px] text-[12px] text-center">
            Don't have an account?{" "}
            <Link href="/register" type="submit" className="font-semibold text-custom-blue-2 hover:text-custom-blue cursor-pointer">
              Create account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

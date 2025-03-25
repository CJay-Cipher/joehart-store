"use client";

import InputField from "@/components/input-components/InputField";
import Link from "next/link";
import React, { useState } from "react";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // New state for phone number
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="md:flex-1 flex justify-center items-center min-h-max w-full z-10 md:pt-6 p-4">
      <div className="bg-main-white w-full xl:max-w-[600px] lg:max-w-[530px] md:max-w-[520px] xs:max-w-[350px] xl:p-6 lg:p-5 p-4 border border-shadow lg:rounded-[20px] rounded-[15px] shadow-xl">
        <div className="text-center xl:pb-10 md:pb-8 pb-6">
          <h1 className="lg:text-[30px] md:text-[28px] text-[22px] text-button-bg font-bold leading-[1.2] tracking-tight">Sign Up</h1>
          <p className="md:text-[13px] text-[12px] text-custom-gray pl-[2px]">Register to see amazing deals</p>
        </div>
        <form action="" className="flex flex-col items-center">
          <div className="w-full flex flex-col items-center md:gap-3 gap-2">
            <div className="w-full flex max-md:flex-col items-center md:gap-3 gap-2">
              <div className="w-full">
                <InputField label="First Name" type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="w-full">
                <InputField label="Last Name" type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>
            <div className="w-full flex max-md:flex-col items-center md:gap-3 gap-2">
              <div className="w-full">
                <InputField label="Email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="w-full">
                <InputField label="Phone" type="tel" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
            </div>
            <div className="w-full">
              <InputField label="Password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="w-full">
              <InputField
                label="Confirm Password"
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <button className="xl:max-w-[300px] md:max-w-[260px] xs:max-w-[240px] w-full xl:h-[45px] md:h-[40px] 2xs:h-[38px] h-[37px] md:mt-10 mt-8 lg:text-[18px] md:text-[16px] text-[14px] text-main-white font-semibold bg-custom-blue hover:bg-custom-blue-2 rounded-[30px] hover:shadow-md">
            Create Account
          </button>
          <p className="md:mt-4 mt-3 lg:text-[14px] text-[12px] text-center">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-custom-blue-2 hover:text-custom-blue cursor-pointer">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;

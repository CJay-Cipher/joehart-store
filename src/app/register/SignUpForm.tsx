"use client";

import React, { useState } from "react";
import { API_URLS } from "@/config/apiConfig";
import InputField from "@/components/input-components/InputField";
import Link from "next/link";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const userData = {
      firstName,
      lastName,
      username: userName,
      email,
      password,
    };

    try {
      const response = await fetch(API_URLS.register, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed.");
      }

      const data = await response.json();
      setMessage("Successfully registered! A verification email has been sent.");
      console.log(data);

      // Store verificationId in localStorage
      localStorage.setItem("verificationId", data.data.verificationId);

      // Reset form fields
      setFirstName("");
      setLastName("");
      setUserName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error occurred");
    }
  };

  return (
    <div className="md:flex-1 flex justify-center items-center min-h-max w-full z-10 md:pt-6 p-4">
      <div className="bg-main-white w-full xl:max-w-[600px] lg:max-w-[530px] md:max-w-[520px] xs:max-w-[350px] xl:p-6 lg:p-5 p-4 border border-shadow lg:rounded-[20px] rounded-[15px] shadow-xl">
        <div className="text-center xl:pb-10 md:pb-8 pb-6">
          <h1 className="lg:text-[30px] md:text-[28px] text-[22px] text-custom-blue font-bold leading-[1.2] tracking-tight">Sign Up</h1>
          <p className="max-md:font-light md:text-[13px] text-[12px] text-main-black pl-[2px]">Register to see amazing deals</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
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
                <InputField label="Email" type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="w-full">
                <InputField label="Phone" type="tel" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
            </div>
            <div className="w-full">
              <InputField label="User Name" type="text" placeholder="User name" value={userName} onChange={(e) => setUserName(e.target.value)} />
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

          <button
            type="submit"
            className="xl:max-w-[300px] md:max-w-[260px] xs:max-w-[240px] w-full xl:h-[45px] md:h-[40px] 2xs:h-[38px] h-[37px] md:mt-10 mt-8 lg:text-[18px] md:text-[16px] text-[14px] text-main-white font-semibold bg-custom-blue hover:bg-custom-blue-2 rounded-[30px] hover:shadow-md"
          >
            Create Account
          </button>
          {message && <p className="text-green-500 mt-4">{message}</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}
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

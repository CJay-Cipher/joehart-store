"use client";

import React, { useState } from "react";
import { API_URLS } from "@/config/apiConfig";
import InputField from "@/components/input-components/InputField";
import Link from "next/link";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      usernameOrEmail: email,
      password,
    };

    try {
      const response = await fetch(API_URLS.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed.");
      }

      const data = await response.json();
      setMessage("Login successful!");

      // Store the access token in localStorage
      localStorage.setItem("accessToken", data.data.accessToken);

      // Reset form fields
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error occurred");
    }
  };

  return (
    <div className="md:flex-1 flex justify-center items-center min-h-max w-full z-10 md:pt-6 p-4">
      <div className="bg-main-white w-full xl:max-w-[500px] lg:max-w-[420px] md:max-w-[380px] xs:max-w-[350px] xl:p-6 lg:p-5 p-4 border border-shadow lg:rounded-[20px] rounded-[15px] shadow-xl">
        <div className="text-center xl:pb-10 md:pb-8 pb-6">
          <h1 className="lg:text-[30px] md:text-[28px] text-[22px] text-custom-blue font-bold leading-[1.2] tracking-tight">Log In</h1>
          <p className="max-md:font-light md:text-[13px] text-[12px] text-main-black pl-[2px]">Sign in to order amazing deals</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="w-full flex flex-col items-center md:gap-3 gap-2">
            <div className="w-full">
              <InputField label="Email" type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="w-full">
              <InputField label="Password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>

          <button
            type="submit"
            className="xl:max-w-[300px] md:max-w-[260px] xs:max-w-[240px] w-full xl:h-[45px] md:h-[40px] 2xs:h-[38px] h-[37px] md:mt-10 mt-8 lg:text-[18px] md:text-[16px] text-[14px] text-main-white font-semibold bg-custom-blue hover:bg-custom-blue-2 rounded-[30px] hover:shadow-md"
          >
            Sign In
          </button>
          <Link href="/forgot-password" className="md:mt-4 mt-3 lg:text-[14px] text-[12px] text-center text-custom-blue-2 hover:text-custom-blue">
            Forgot password?
          </Link>
          <p className="md:mt-4 mt-3 lg:text-[14px] text-[12px] text-center">
            Don't have an account?{" "}
            <Link href="/register" className="font-semibold text-custom-blue-2 hover:text-custom-blue cursor-pointer">
              Create account
            </Link>
          </p>
          {message && <p className="text-green-500 mt-4">{message}</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

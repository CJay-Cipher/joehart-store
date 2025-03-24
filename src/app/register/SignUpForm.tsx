import React from "react";

const SignUpForm = () => {
  return (
    <div>
      <form action="" className="flex flex-col items-center">
        <div className="w-full flex flex-col items-center sm:gap-6 gap-4">
          <div className="md:max-w-[400px] max-w-[350px] w-full">
            <label htmlFor=""></label>
            <input
              type="text"
              className="w-full lg:h-[50px] 2xs:h-[45px] h-[40px] xs:p-4 p-3 lg:text-[16px] md:text-[14px] text-[12px] lg:rounded-[15px] rounded-[10px] border border-custom-gray-dark"
              placeholder="First name"
            />
          </div>
          <div className="md:max-w-[400px] max-w-[350px] w-full">
            <label htmlFor=""></label>
            <input
              type="text"
              className="w-full lg:h-[50px] 2xs:h-[45px] h-[40px] xs:p-4 p-3 lg:text-[16px] md:text-[14px] text-[12px] lg:rounded-[15px] rounded-[10px] border border-custom-gray-dark"
              placeholder="Last name"
            />
          </div>
          <div className="md:max-w-[400px] max-w-[350px] w-full">
            <label htmlFor=""></label>
            <input
              type="text"
              className="w-full lg:h-[50px] 2xs:h-[45px] h-[40px] xs:p-4 p-3 lg:text-[16px] md:text-[14px] text-[12px] lg:rounded-[15px] rounded-[10px] border border-custom-gray-dark"
              placeholder="Email"
            />
          </div>
          <div className="md:max-w-[400px] max-w-[350px] w-full">
            <label htmlFor=""></label>
            <input
              type="text"
              className="w-full lg:h-[50px] 2xs:h-[45px] h-[40px] xs:p-4 p-3 lg:text-[16px] md:text-[14px] text-[12px] lg:rounded-[15px] rounded-[10px] border border-custom-gray-dark"
              placeholder="Password"
            />
          </div>
          <div className="md:max-w-[400px] max-w-[350px] w-full">
            <label htmlFor=""></label>
            <input
              type="text"
              className="w-full lg:h-[50px] 2xs:h-[45px] h-[40px] xs:p-4 p-3 lg:text-[16px] md:text-[14px] text-[12px] lg:rounded-[15px] rounded-[10px] border border-custom-gray-dark"
              placeholder="Confirm password"
            />
          </div>
        </div>

        <button className="md:max-w-[400px] max-w-[350px] w-full lg:h-[50px] 2xs:h-[45px] h-[40px] md:mt-8 mt-6 lg:text-[20px] md:text-[18px] text-[16px] text-main-white font-medium bg-custom-blue-2 hover:bg-custom-blue lg:rounded-[15px] rounded-[10px] border border-custom-gray-dark">
          Sign Up
        </button>
        <p className="md:m-2 m-1 lg:text-[14px] text-[12px] text-center">
          Already have an account? <span className="font-semibold text-custom-blue-2 hover:text-custom-blue cursor-pointer">Login</span>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;

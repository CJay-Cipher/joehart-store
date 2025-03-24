import React from "react";

const SignUpForm = () => {
  return (
    <div className="flex justify-center items-center min-h-max w-full z-10 md:pt-6 p-4">
      <div className="bg-main-white w-full xl:max-w-[450px] md:max-w-[400px] max-w-[350px] xl:py-8 lg:py-6 p-4 border border-shadow lg:rounded-[20px] rounded-[15px] shadow-xl">
        <div className="text-center xl:pb-10 md:pb-8 pb-6">
          <h1 className="lg:text-[36px] md:text-[30px] text-[26px] text-button-bg font-bold leading-[1.2] tracking-tight">Sign Up</h1>
          <p className="md:text-[14px] text-[12px] text-custom-gray pl-[2px]">Register to see amazing deals</p>
        </div>
        <form action="" className="flex flex-col items-center">
          <div className="w-full flex flex-col items-center xl:gap-4 md:gap-3 gap-2">
            <div className="xl:max-w-[400px] md:max-w-[350px] max-w-[320px] w-full">
              <label htmlFor=""></label>
              <input
                type="text"
                className="w-full xl:h-[50px] md:h-[45px] 2xs:h-[40px] h-[40px] xs:p-4 p-3 lg:text-[16px] md:text-[14px] text-[12px] xl:rounded-[15px] md:rounded-[10px] rounded-[20px] border border-custom-gray-dark"
                placeholder="First name"
              />
            </div>
            <div className="xl:max-w-[400px] md:max-w-[350px] max-w-[320px] w-full">
              <label htmlFor=""></label>
              <input
                type="text"
                className="w-full xl:h-[50px] md:h-[45px] 2xs:h-[40px] h-[40px] xs:p-4 p-3 lg:text-[16px] md:text-[14px] text-[12px] xl:rounded-[15px] md:rounded-[10px] rounded-[20px] border border-custom-gray-dark"
                placeholder="Last name"
              />
            </div>
            <div className="xl:max-w-[400px] md:max-w-[350px] max-w-[320px] w-full">
              <label htmlFor=""></label>
              <input
                type="text"
                className="w-full xl:h-[50px] md:h-[45px] 2xs:h-[40px] h-[40px] xs:p-4 p-3 lg:text-[16px] md:text-[14px] text-[12px] xl:rounded-[15px] md:rounded-[10px] rounded-[20px] border border-custom-gray-dark"
                placeholder="Email"
              />
            </div>
            <div className="xl:max-w-[400px] md:max-w-[350px] max-w-[320px] w-full">
              <label htmlFor=""></label>
              <input
                type="text"
                className="w-full xl:h-[50px] md:h-[45px] 2xs:h-[40px] h-[40px] xs:p-4 p-3 lg:text-[16px] md:text-[14px] text-[12px] xl:rounded-[15px] md:rounded-[10px] rounded-[20px] border border-custom-gray-dark"
                placeholder="Password"
              />
            </div>
            <div className="xl:max-w-[400px] md:max-w-[350px] max-w-[320px] w-full">
              <label htmlFor=""></label>
              <input
                type="text"
                className="w-full xl:h-[50px] md:h-[45px] 2xs:h-[40px] h-[40px] xs:p-4 p-3 lg:text-[16px] md:text-[14px] text-[12px] xl:rounded-[15px] md:rounded-[10px] rounded-[20px] border border-custom-gray-dark"
                placeholder="Confirm password"
              />
            </div>
          </div>

          <button className="xl:max-w-[400px] md:max-w-[350px] max-w-[320px] w-full xl:h-[50px] md:h-[45px] 2xs:h-[40px] h-[40px] md:mt-8 mt-6 lg:text-[20px] md:text-[18px] text-[16px] text-main-white font-medium bg-custom-blue-2 hover:bg-custom-blue xl:rounded-[15px] md:rounded-[10px] rounded-[20px] border border-custom-gray-dark">
            Create Account
          </button>
          <p className="md:m-2 m-1 lg:text-[14px] text-[12px] text-center">
            Already have an account? <span className="font-semibold text-custom-blue-2 hover:text-custom-blue cursor-pointer">Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;

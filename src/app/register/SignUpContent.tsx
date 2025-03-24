import React from "react";

type signUpContentProps = {
  hideContent?: boolean;
};
const SignUpContent = ({ hideContent }: signUpContentProps) => {
  return (
    <div className={`md:absolute top-0 flex flex-col justify-center max-md:max-w-[400px] md:h-full z-10 xl:p-12 lg:p-8 md:p-10 p-8 ${hideContent && "md:hidden"}`}>
      <h1 className="xl:text-[44px] lg:text-[36px] md:text-[34px] text-[28px] max-md:text-button-bg text-main-white font-bold leading-[1.2] tracking-tight">
        Explore the Best <br className="max-lg:hidden" /> Deals on Premium Fragrances
      </h1>
      <p className="xl:text-[16px] lg:text-[14px] text-[12px] max-md:text-button-bg text-main-white pl-[2px]">Discover The Best Deals on top Fragrances</p>
    </div>
  );
};

export default SignUpContent;

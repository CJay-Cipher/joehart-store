import React from "react";

type AuthPageContentProps = {
  headerText: string;
  subText: string;
  hideContent?: boolean;
};
const AuthPageContent = ({ headerText, subText, hideContent }: AuthPageContentProps) => {
  return (
    <div className={`md:absolute top-0 flex flex-col justify-center max-md:max-w-[400px] md:h-full z-10 xl:p-12 lg:p-8 md:p-10 p-8 ${hideContent && "md:hidden"}`}>
      <h1 className="xl:text-[40px] lg:text-[30px] md:text-[24px] text-[28px] max-md:text-center max-md:text-button-bg text-main-white font-bold leading-[1.2] tracking-tight">
        {headerText}
      </h1>
      <p className="lg:mt-2 mt-1 xl:text-[16px] lg:text-[14px] text-[12px] max-md:text-center max-md:text-button-bg text-main-white pl-[2px]">{subText}</p>
    </div>
  );
};

export default AuthPageContent;

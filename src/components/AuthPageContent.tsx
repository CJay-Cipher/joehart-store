import React from "react";

type AuthPageContentProps = {
  headerText?: string;
  subText?: string;
  hideContent?: boolean;
  isDefault?: boolean;
};
const AuthPageContent = ({ headerText, subText, hideContent, isDefault }: AuthPageContentProps) => {
  return (
    <div
      className={` ${
        !isDefault ? "md:absolute top-0 flex flex-col justify-center md:h-full max-md:text-button-bg text-main-white" : "max-w-[300px] text-main-black text-center"
      } xl:max-w-[450px] md:max-w-[400px] max-w-[350px] z-10 xl:p-8 lg:p-6 md:p-6 p-4 ${hideContent && !isDefault && "md:hidden"}`}
    >
      <h1 className="xl:text-[40px] lg:text-[30px] md:text-[24px] 2xs:text-[23px] text-[19px] max-md:text-center font-bold leading-[1.2] tracking-tight">{headerText}</h1>
      <p className="lg:mt-2 mt-1 xl:text-[16px] lg:text-[14px] text-[12px] max-md:text-center pl-[2px]">{subText}</p>
    </div>
  );
};

export default AuthPageContent;

import React, { useState } from "react";
// import CallToAction from "../common/CallToAction";
// import { url, urlRegister } from "../../constants/appUrl";
// import { mobileNavLinksNew } from "../ constants";
// import DropDownIcon from "../../assets/icons/DropDown";

type MobileDropdownProps = {
  isMenuOpen?: boolean;
};

const MobileDropdown = ({ isMenuOpen }: MobileDropdownProps) => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const toggleFeatures = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
  };
  return (
    <div
      className={`flex flex-col absolute z-20 bottom-full w-full transition-all duration-500 h-max min-h-[calc(100vh-60px)] pb-screen bg-white shadow-lg lg:hidden ${
        isMenuOpen ? "mobile-position-top" : "top-[calc(-100vh)] pointer-events-none opagcity-0"
      }`}
    >
      {/* <ul className="list-none">
        {mobileNavLinksNew.map((link, index) => (
          <li key={index}>
            {link.showToggle ? (
              <button
                className={`relative z-20 bg-white text-gray-800 hover:text-[#044E97] active:from-[#c4e4ff] flex justify-between px-4 py-5 hover:bg-gradient-to-r from-[#e1f1ff] to-transparent border-b border-gray-200 w-full
                            }`}
                onClick={toggleFeatures}
              >
                {link.title}
                <span className={`${isFeaturesOpen && "rotate-180"}`}>
                  {<DropDownIcon />}
                </span>
              </button>
            ) : (
              <a
                href={link.to || link.id}
                className={`relative z-20 bg-white text-gray-800 hover:text-[#044E97] active:from-[#c4e4ff] flex justify-between px-4 py-5 hover:bg-gradient-to-r from-[#e1f1ff] to-transparent border-b border-gray-200`}
              >
                {link.title}
              </a>
            )}
            {link.showToggle && link.subLinks && (
              <ul
                className={`relative z-10 transition-height duration-[0.4s] ${
                  isFeaturesOpen
                    ? `h-[385px]`
                    : "h-0 opacity-0 pointer-events-none"
                }`}
              >
                {link.subLinks.map((subLink) => (
                  <li key={subLink.to}>
                    <a
                      href={subLink.to}
                      className="text-gray-800 flex items-center h-[55px] px-10 hover:text-[#044E97] active:from-[#c4e4ff] hover:bg-gradient-to-r from-[#e1f1ff] to-transparent"
                    >
                      {subLink.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul> */}

      <div className="segoeUI relative z-20 bg-white gap-3 items-center flex text-center justify-center p-4">testing</div>
      <div className="flex-1 relative z-20 bg-white"></div>
    </div>
  );
};

export default MobileDropdown;

import React, { useState, useEffect, useRef } from "react";

type SortOption = {
  value: string;
  label: string;
};

const sortOptions: SortOption[] = [
  { value: "relevance", label: "Relevance" },
  { value: "date_ascending", label: "Date: Oldest First" },
  { value: "date_descending", label: "Date: Newest First" },
  { value: "popularity", label: "Popularity" },
];

const SortByDropdown: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<SortOption>(sortOptions[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: SortOption) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div className="flex items-center max-sm:flex-col sm:gap-4 gap-1">
        <h3 className="md:text-[16px] text-[14px] text-nowrap font-semibold">Sort By</h3>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center h-[34px] w-full px-4 text-sm text-nowrap font-medium bg-main-white lg:rounded-[30px] rounded-[5px] focus:outline-none focus:ring focus:ring-custom-gray-dark"
        >
          {selectedOption.label}
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 md:mt-1 mt-[2px] w-full max-sm:min-w-max rounded-md bg-white shadow-lg border border-custom-gray-dark overflow-hidden">
          <div className="rounded-md">
            <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {sortOptions.map((option) => (
                <li key={option.value}>
                  <button
                    onClick={() => handleOptionClick(option)}
                    className={`block px-4 py-2 text-sm w-full text-left text-nowrap ${
                      selectedOption.value === option.value ? "text-main-white font-medium bg-custom-gray-darker" : "hover:bg-shadow"
                    }`}
                    role="menuitem"
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortByDropdown;

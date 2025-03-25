import React from "react";

type InputFieldProps = {
  label: string;
  type: "text" | "email" | "tel" | "password"; // Allowed input types
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string; // Additional CSS classes for customization
  id?: string; // Optional ID for the input
};

const InputField = ({ label, type, placeholder, value, onChange, required = false, className = "", id }: InputFieldProps) => {
  return (
    <div className={`w-full ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="w-full xl:h-[45px] md:h-[40px] 2xs:h-[38px] h-[37px] xs:p-3 p-2 lg:text-[16px] md:text-[14px] text-[12px]  rounded-[5px] border border-custom-gray-dark focus:outline-custom-blue"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;

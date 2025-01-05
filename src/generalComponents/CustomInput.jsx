import React, { useState } from "react";

export const CustomInput = ({
  placeholder = "Text Field",
  value = "",

  error = "",

  setValue,
  icon,
  label = "",
  className = "",
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => setIsActive(true);
  const handleBlur = () => setIsActive(false);

  return (
    <>
      {label && <p className="body-sm text-dark mb-1">{label}</p>}
      <div
        className={`flex bg-white items-center border  rounded-lg py-3 px-4 w-full ${className} ${
          error
            ? "border-danger"
            : isActive
            ? "border-primary"
            : "border-primary-light"
        } ${isActive ? "shadow-[0_0_32px_0_rgba(99,60,255,0.25)] " : ""}`}
      >
        {/* Prefix Icon */}
        {icon && <span className={`mr-3  flex-shrink-0`}>{icon}</span>}

        {/* Input Field */}
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-full bg-transparent focus:outline-none text-body-m placeholder:text-dark/50  ${
            error ? "text-danger" : "text-dark"
          }`}
        />

        {/* Error Message */}
        {error && (
          <div className="text-danger text-[12px] whitespace-nowrap">
            {error}
          </div>
        )}
      </div>
    </>
  );
};

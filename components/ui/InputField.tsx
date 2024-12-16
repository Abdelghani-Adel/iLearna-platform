"use client";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { LuEyeClosed } from "react-icons/lu";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  register: any; // react-hook-form's `register` function
  error?: string; // Validation error message
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { id, label, type = "text", placeholder, register, error } = props;
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";

  return (
    <div>
      {/* Label */}
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-gray-700 mb-1"
      >
        {label}
      </label>

      <div className="relative">
        {/* Input Field */}
        <input
          id={id}
          type={isPasswordField && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          className={`w-full text-sm py-2 px-2 pr-8 border rounded-md focus:outline-none focus:ring-1 font-normal ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
          {...register}
        />

        {/* Password Toggle Icon */}
        {isPasswordField && (
          <TogglePassword
            showPassword={showPassword}
            onClick={() => setShowPassword((prev) => !prev)}
          />
        )}
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

const TogglePassword = ({
  showPassword,
  onClick,
}: {
  showPassword: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-500 hover:text-gray-700"
    >
      {showPassword ? <LuEyeClosed size={18} /> : <FiEye size={18} />}
    </button>
  );
};

export default InputField;

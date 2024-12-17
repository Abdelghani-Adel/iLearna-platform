import { IFnChangeAuthForm } from "@/app/login/page";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoArrowBack } from "react-icons/io5"; // For the back arrow icon

// Define the form data type
interface ResetPasswordForm {
  email: string;
}

interface IProps {
  changeActiveForm: IFnChangeAuthForm;
}

const ResetPasswordRequest: React.FC<IProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordForm>();

  const submitHandler: SubmitHandler<ResetPasswordForm> = (data) => {};

  return (
    <div className="max-w-lg mx-auto p-4">
      {/* Back Button */}
      <button
        className="flex items-center text-customGray mb-4 hover:text-black"
        onClick={() => props.changeActiveForm("loginForm")}
      >
        <IoArrowBack className="mr-2" />
        Back
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold text-accent mb-2">
        Reset your password<span className="text-accent">.</span>
      </h1>

      {/* Description */}
      <p className="text-customGray mb-6">
        No worries! Enter your email address below, and we will send you a link
        to reset your password.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-customGray"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-error text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordRequest;

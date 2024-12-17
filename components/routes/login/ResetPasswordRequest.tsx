import { IFnChangeAuthForm } from "@/app/login/page";
import InputEmail from "@/components/ui/InputEmail";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { IoArrowBack } from "react-icons/io5"; // For the back arrow icon

// Define the form data type
interface ResetPasswordForm {
  email: string;
}

interface IProps {
  changeActiveForm: IFnChangeAuthForm;
}

const ResetPasswordRequest: React.FC<IProps> = (props) => {
  const formMethods = useForm<ResetPasswordForm>();
  const { handleSubmit } = formMethods;

  const submitHandler: SubmitHandler<ResetPasswordForm> = (data) => {};

  return (
    <div className="max-w-lg mx-auto p-4">
      <button
        className="flex items-center text-customGray mb-4 hover:text-black"
        onClick={() => props.changeActiveForm("loginForm")}
      >
        <IoArrowBack className="mr-2" />
        Back
      </button>

      <h2 className="text-3xl font-bold text-accent mb-5">
        Reset your password.
      </h2>

      <p className="text-customGray mb-6">
        No worries! Enter your email address below, and we will send you a link
        to reset your password.
      </p>

      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
          <InputEmail
            name="email"
            label="Email"
            placeholder="Enter your email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            }}
          />

          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send Reset Link
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default ResetPasswordRequest;

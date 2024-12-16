"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "@/components/ui/InputField";
import { IRenderedComponent } from "@/app/login/page";

type FormValues = {
  email: string;
  password: string;
};

type IProps = {
  setRenderedComponent: (component: IRenderedComponent) => void;
};

const SignIn = (props: IProps) => {
  const { setRenderedComponent } = props;
  const form = useForm<FormValues>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="my-auto">
      <h2 className="text-3xl font-bold text-accent mb-6">Welcome Back.</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          id="email"
          label="Email"
          placeholder="Enter your email"
          register={register("email", { required: "Email is required" })}
          error={errors.email?.message}
        />

        <InputField
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          register={register("password", { required: "Password is required" })}
          error={errors.password?.message}
        />

        <div className="text-right">
          <button
            type="button"
            className="text-primary font-semibold text-sm hover:underline"
            onClick={() => setRenderedComponent("resetRequest")}
          >
            Forgot Password ?
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-accent rounded-md hover:bg-accent-dark transition duration-300"
        >
          Log in
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-neutral font-semibold">
        Don't have an account?{" "}
        <button
          className="text-accent hover:underline font-medium"
          onClick={() => setRenderedComponent("signUpForm")}
        >
          Signup
        </button>
      </div>

      <div className="relative my-3">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm font-bold">
          <span className="px-2 bg-white text-gray-500">or login with</span>
        </div>
      </div>

      <div className="flex space-x-10 justify-center">
        <button>
          <img
            src="/images/social-media/google.svg"
            alt="Google"
            className="w-8 h-8"
          />
        </button>
        <button>
          <img
            src="/images/social-media/facebook.png"
            alt="Google"
            className="w-8 h-8"
          />
        </button>
        <button>
          <img
            src="/images/social-media/linkedin.png"
            alt="Google"
            className="w-8 h-8"
          />
        </button>
      </div>
    </div>
  );
};

export default SignIn;

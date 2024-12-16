"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler, UseFormSetValue } from "react-hook-form";
import { IRenderedComponent } from "@/app/login/page";
import Link from "next/link";
import InputField from "@/components/ui/InputField";
import FileInput from "@/components/ui/FileInput";

type FormValues = {
  username: string;
  email: string;
  password: string;
  cv?: FileList;
};

type IProps = {
  setRenderedComponent: (component: IRenderedComponent) => void;
};

const SignUp = (props: IProps) => {
  const [activeTab, setActiveTab] = useState<"student" | "freelancer">(
    "student"
  );

  const form = useForm<FormValues>();
  const { register, handleSubmit, setValue, formState } = form;
  const { errors } = formState;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="mt-6 font-semibold">
      {/* Title */}
      <h2 className="text-3xl font-bold text-accent mb-5">Create account.</h2>

      {/* Tabs */}
      <div className="flex justify-center mb-6 border-b">
        <button
          onClick={() => setActiveTab("student")}
          className={`w-1/2 pb-2 text-center ${
            activeTab === "student"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-400"
          }`}
        >
          Student
        </button>
        <button
          onClick={() => setActiveTab("freelancer")}
          className={`w-1/2 pb-2 text-center ${
            activeTab === "freelancer"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-400"
          }`}
        >
          Freelancer
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Username */}
        <InputField
          id="username"
          label="Username"
          placeholder="Enter your name"
          register={register("username", { required: "Username is required" })}
          error={errors.username?.message}
        />

        {/* Email */}
        <InputField
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          register={register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
          error={errors.email?.message}
        />

        {/* Password */}
        <InputField
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          register={register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
              message: "Must include an uppercase, a number, and a symbol",
            },
          })}
          error={errors.password?.message}
        />

        {/* Password Hints */}
        <ul className="text-neutral text-xs space-y-1 font-thin">
          <li>✓ Minimum 8 characters in length.</li>
          <li>✓ At least one uppercase letter (A-Z).</li>
          <li>✓ Contains a number & symbol.</li>
        </ul>

        {/* File Upload for Freelancer Tab */}
        {activeTab === "freelancer" && (
          <FileInput<FormValues>
            label="Upload your CV"
            name="cv"
            setValue={setValue}
            accept=".pdf, .doc, .docx"
            helperText="Supported formats: PDF, DOC, DOCX."
            error={errors.cv?.message}
          />
        )}

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full py-2 text-white bg-accent rounded-md hover:bg-accent-dark transition duration-300"
        >
          Sign Up
        </button>
      </form>

      {/* Login Option */}
      <div className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <button
          className="text-blue-500 hover:underline font-medium"
          onClick={() => props.setRenderedComponent("loginForm")}
        >
          Login
        </button>
      </div>

      {/* Divider */}
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">or sign up with</span>
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

      {/* Terms & Conditions */}
      <div className="text-center mt-3 text-xs">
        <p className="text-gray-500">
          By signing up to create an account I accept Company’s{" "}
        </p>
        <Link href="#" className="text-accent">
          Terms of Use and Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

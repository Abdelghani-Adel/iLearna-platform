"use client";

import AuthImage from "@/components/routes/login/AuthImage";
import CreateNewPassword from "@/components/routes/login/CreateNewPassword";
import LoginFooter from "@/components/routes/login/LoginFooter";
import LoginHeader from "@/components/routes/login/LoginHeader";
import ResetPasswordRequest from "@/components/routes/login/ResetPasswordRequest";
import SignIn from "@/components/routes/login/SignIn";
import SignUp from "@/components/routes/login/Signup";
import { useState } from "react";

const LoginPage = () => {
  const [activeForm, setActiveForm] = useState<IActiveAuthForm>("loginForm");

  const renderForm = () => {
    switch (activeForm) {
      case "loginForm":
        return <SignIn changeActiveForm={setActiveForm} />;
      case "signUpForm":
        return <SignUp changeActiveForm={setActiveForm} />;
      case "resetRequest":
        return <ResetPasswordRequest changeActiveForm={setActiveForm} />;
      case "resetForm":
        return <CreateNewPassword changeActiveForm={setActiveForm} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex space-x-5 p-3 h-screen">
      <div className="w-full px-2 py-3 md:w-[70%] md:mx-auto lg:w-1/2 lg:px-28 lg:py-3 flex flex-col">
        <LoginHeader />

        {renderForm()}

        <LoginFooter />
      </div>

      <div className="hidden lg:block w-1/2 h-full">
        <AuthImage />
      </div>
    </div>
  );
};

type IActiveAuthForm =
  | "loginForm"
  | "signUpForm"
  | "resetForm"
  | "resetRequest"
  | "resetComplete";

export type IFnChangeAuthForm = (component: IActiveAuthForm) => void;

export default LoginPage;

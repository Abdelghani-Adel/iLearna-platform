"use client";
import AuthImage from "@/components/routes/login/AuthImage";
import CreateNewPassword from "@/components/routes/login/CreateNewPassword";
import LoginFooter from "@/components/routes/login/LoginFooter";
import LoginHeader from "@/components/routes/login/LoginHeader";
import ResetPasswordRequest from "@/components/routes/login/ResetPasswordRequest";
import SignIn from "@/components/routes/login/SignIn";
import SignUp from "@/components/routes/login/Signup";
import React, { useState } from "react";

const LoginPage = () => {
  return (
    <div className="flex space-x-5 p-3 h-screen">
      <div className="w-full px-2 py-3 md:w-[70%] md:mx-auto lg:w-1/2 lg:px-28 lg:py-3 flex flex-col">
        <LoginHeader />

        <RenderedComponent />

        <LoginFooter />
      </div>

      <div className="hidden lg:block w-1/2 h-full">
        <AuthImage />
      </div>
    </div>
  );
};

const RenderedComponent = () => {
  const [component, setComponent] = useState<IRenderedComponent>("loginForm");

  const renderComponent = () => {
    switch (component) {
      case "loginForm":
        return <SignIn setRenderedComponent={setComponent} />;
      case "signUpForm":
        return <SignUp setRenderedComponent={setComponent} />;
      case "resetRequest":
        return <ResetPasswordRequest />;
      case "resetForm":
        return <CreateNewPassword />;
      default:
        return null;
    }
  };

  return <>{renderComponent()}</>;
};

export type IRenderedComponent =
  | "loginForm"
  | "signUpForm"
  | "resetForm"
  | "resetRequest"
  | "resetComplete";

export default LoginPage;

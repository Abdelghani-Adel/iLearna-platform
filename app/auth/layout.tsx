import AuthImage from "@/components/routes/auth/AuthImage";
import LoginFooter from "@/components/routes/auth/LoginFooter";
import LoginHeader from "@/components/routes/auth/LoginHeader";
import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex space-x-5 p-3 h-screen">
      <section className="w-full px-2 py-3 md:w-[70%] md:mx-auto lg:w-1/2 lg:px-28 lg:py-3 flex flex-col">
        <LoginHeader />

        {children}

        <LoginFooter />
      </section>

      <section className="hidden lg:block w-1/2 h-full">
        <AuthImage />
      </section>
    </main>
  );
};

export default AuthLayout;

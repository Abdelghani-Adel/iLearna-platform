"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

const MainHeader: React.FC = () => {
  return (
    <header className="flex items-center space-x-10 px-6 py-4 bg-white shadow-sm">
      <Logo />
      <NavBar />
    </header>
  );
};

const Logo: FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/brand/blue-logo.png"
        alt="White Logo"
        width={1248}
        height={388}
        className="w-24"
      />
    </Link>
  );
};

const NavBar: React.FC = () => {
  return (
    <nav className="flex items-center space-x-10 text-sm text-primary">
      <NavLink href="/" label="home" />
      <NavLink href="/courses" label="courses" />
      <NavLink href="/community" label="community" />
      <NavLink href="/blogs" label="blogs" />
      <NavLink href="/about-us" label="about" />
      <NavLink href="/contact" label="contact" />
    </nav>
  );
};

const NavLink: FC<{ href: string; label: string }> = (props) => {
  const { href, label } = props;
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`hover:text-blue-600 capitalize ${
        isActive ? "navLink-active" : ""
      }`}
    >
      {label}
    </Link>
  );
};

export default MainHeader;

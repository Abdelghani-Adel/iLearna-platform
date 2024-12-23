import React from "react";
import { Metadata } from "next";
import { baseMetadata } from "@/utils/baseMetadata";

export const metadata: Metadata = {
  title: "About I Learna",
  ...baseMetadata,
};

const Page = () => {
  return <div>About us</div>;
};

export default Page;

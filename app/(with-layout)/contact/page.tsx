import React from "react";
import { baseMetadata } from "@/utils/baseMetadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "I Learna Contacts",
  ...baseMetadata,
};

const Page = () => {
  return <div>contact</div>;
};

export default Page;

import React from "react";
import { baseMetadata } from "@/utils/baseMetadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "I Learna Courses",
  ...baseMetadata,
};

const Page = () => {
  return <div>Courses</div>;
};

export default Page;

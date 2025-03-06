import { getCourseModules } from "@/services/userServices";
import { decrypt } from "@/utils/Cryptojs";
import React, { FC } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: FC<PageProps> = async ({ params }) => {
  const itemId = decrypt(params.id);
  const modules = await getCourseModules(itemId);

  return <div>Page</div>;
};

export default Page;

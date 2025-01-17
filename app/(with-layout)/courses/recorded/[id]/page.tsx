import { decrypt } from "@/utils/Cryptojs";
import React, { FC } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: FC<PageProps> = ({ params }) => {
  const itemId = decrypt(params.id);

  return <main className="p-4">Recorded Course ID : {itemId}</main>;
};

export default Page;

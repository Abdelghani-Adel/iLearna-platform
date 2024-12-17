import Image from "next/image";
import React from "react";

const Language = () => {
  return (
    <div className="flex items-center space-x-1">
      <Image
        src="/images/icons/world-icon.png"
        width={16}
        height={16}
        alt="Language Icon"
        className="w-5 h-5 shrink-0"
      />

      <p className="text-customGray font-normal">English (us)</p>
    </div>
  );
};

export default Language;

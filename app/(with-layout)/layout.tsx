import MainFooter from "@/components/layout/MainFooter";
import { ReactNode } from "react";

export default function WithLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {children}
      <MainFooter />
    </div>
  );
}

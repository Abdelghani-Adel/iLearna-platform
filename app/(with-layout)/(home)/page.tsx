import Faq from "@/components/molecules/Faq";
import { baseMetadata } from "@/utils/baseMetadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "I Learna",
  ...baseMetadata,
};

export default function Home() {
  return (
    <main>
      <section className="flex justify-center p-10">
        <Faq />
      </section>
    </main>
  );
}

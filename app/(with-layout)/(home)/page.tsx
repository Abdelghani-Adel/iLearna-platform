import Faq from "@/components/molecules/Faq";
import PageTitle from "@/components/ui/PageTitle";
import { baseMetadata } from "@/utils/baseMetadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "I Learna",
  ...baseMetadata,
};

export default function Home() {
  return (
    <main>
      <section className="px-10">
        <div className="lg:w-1/3">
          <PageTitle>
            Unlock Your Potential with Expert-Led Courses & Learning Paths
          </PageTitle>
        </div>
      </section>
      <section className="flex justify-center p-10">
        <Faq />
      </section>
    </main>
  );
}

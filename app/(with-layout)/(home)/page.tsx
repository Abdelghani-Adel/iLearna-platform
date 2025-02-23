import Faq from "@/components/molecules/Faq";
import Carousel from "@/components/ui/Carousel";
import PageTitle from "@/components/ui/PageTitle";
import { baseMetadata } from "@/utils/baseMetadata";
import { Metadata } from "next";
import Image from "next/image";
import { Settings } from "react-slick";
import reviews from "@/public/data/reviews.json";
import { v4 } from "uuid";
import SectionTitle from "@/components/ui/SectionTitle";
import ReviewMessage from "@/components/molecules/ReviewMessage";
import homecarousel from "@/public/data/homeCarousel.json";
import { FaPersonChalkboard } from "react-icons/fa6";
import { SiMinds } from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { SlBookOpen } from "react-icons/sl";

export const metadata: Metadata = {
  title: "I Learna",
  ...baseMetadata,
};

const carouselSettings: Settings = {
  slidesToShow: 3,
  autoplay: true,
  speed: 500,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024, // Screens smaller than 1024px
      settings: {
        slidesToShow: 2, // Show 2 slides
        arrows: true, // Enable arrows
      },
    },
    {
      breakpoint: 768, // Screens smaller than 768px
      settings: {
        slidesToShow: 1, // Show 1 slide
        arrows: true, // Enable arrows
      },
    },
  ],
};

const settings2: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

export default function Home() {
  return (
    <main className="space-y-16">
      {/* <section className="p-10 max-w-7xl m-auto"> */}
      <section className="p-2 2xl:p-10 2xl:max-w-7xl 2xl:m-auto">
        <Carousel settings={settings2}>
          {homecarousel.map((slide) => (
            <div
              key={slide.id}
              className="relative h-[20vh] 2xl:h-[32rem] 2xl:py-20 2xl:px-28 text-white"
            >
              <Image src={slide.background} alt={slide.id.toString()} fill />

              <div className="z-10 relative pl-4 pr-[50%] h-full flex flex-col justify-center gap-6">
                <h2 className="font-medium 2xl:text-4xl 2xl:font-medium">
                  {slide.title}
                </h2>

                <p className="hidden 2xl:block">{slide.desc}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      <section className="2xl:flex 2xl:gap-5">
        <div className="bg-accent p-10 text-white 2xl:w-2/5 shrink-0 flex flex-col justify-center gap-3">
          <h2 className="text-4xl font-semibold">
            Your path to success starts here
          </h2>
          <p>
            Unlock the tools, knowledge, and guidance you need to achieve your
            goals. With expert-led courses, personalized learning paths, and a
            seamless platform experience, we’re here to help you take the next
            step toward success
          </p>
        </div>

        <div className="grid grid-cols-1 grid-rows-4 gap-5 p-5 2xl:grid-cols-2 2xl:grid-rows-2">
          <div>
            <div className="text-4xl bg-[#EBD78E4D] w-max p-3 mb-2 rounded-full">
              <FaPersonChalkboard className="text-[#EBD78E]" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Expert-Led Learning</h2>
            <p className="text-customGray">
              Gain insights from top professionals with real-world experience,
              ensuring you receive practical and up-to-date knowledge
            </p>
          </div>
          <div>
            <div className="text-4xl bg-[#38B00033] w-max p-3 mb-2 rounded-full">
              <GiBrain className="text-[#5DB87E]" />
            </div>
            <h2 className="text-xl font-semibold mb-2">
              Personlized Learning Paths
            </h2>
            <p className="text-customGray">
              Choose tracks, courses, or live sessions tailored to your goals,
              with flexible options for individual or group learning
            </p>
          </div>
          <div>
            <div className="text-4xl bg-[#43B1E433] w-max p-3 mb-2 rounded-full">
              <HiOutlineRocketLaunch className="text-[#43B1E4]" />
            </div>
            <h2 className="text-xl font-semibold mb-2">
              Seamless Learning Experience
            </h2>
            <p className="text-customGray">
              Enjoy a user-friendly platform with secure access, progress
              tracking, and expert support to help you succeed at your own pace
            </p>
          </div>
          <div>
            <div className="text-4xl bg-[#E7A3A333] w-max p-3 mb-2 rounded-full">
              <SlBookOpen className="text-[#E18C8C]" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Hands-On Experience</h2>
            <p className="text-customGray">
              Engage in real-world case studies, interactive sessions, and
              step-by-step guidance to master industry-relevant skills
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="ml-5 2xl:max-w-sm 2xl:ml-20">
          <SectionTitle>What our users say about iLearna</SectionTitle>
        </div>
        <Carousel settings={carouselSettings}>
          {reviews.map((review) => (
            <div key={v4()} className="p-4">
              <ReviewMessage review={review} />
            </div>
          ))}
        </Carousel>
      </section>

      <section className="2xl:flex 2xl:justify-center">
        <Faq />
      </section>
    </main>
  );
}

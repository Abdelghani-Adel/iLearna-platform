import RatingRO from "@/components/ui/RatingRO";
import { getRecordedCourseDetails } from "@/services/itemsServices";
import { decrypt } from "@/utils/Cryptojs";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaCheck, FaRegHeart } from "react-icons/fa6";
import { IoNewspaperOutline, IoStar } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { PiBookOpenText } from "react-icons/pi";
import { v4 } from "uuid";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: FC<PageProps> = async ({ params }) => {
  const itemId = decrypt(params.id);
  const details = await getRecordedCourseDetails(itemId);

  return (
    <main className="p-4 max-w-[1440px] m-auto">
      <section className="bg-primary p-10 text-white flex justify-between gap-10 items-stretch relative">
        <div className="flex flex-col">
          <h1 className="text-5xl font-semibold capitalize mb-3">
            {details.basicInfo.courseTitle}
          </h1>
          <p>{details.basicInfo.desc}</p>

          <div className="mt-auto space-y-3">
            <p className="space-x-3 text-xl">
              <span className="text-accent font-semibold">
                ${details.basicInfo.price.activePrice}
              </span>
              <span className="line-through text-customGray">
                ${details.basicInfo.price.oldPrice}
              </span>
            </p>

            <div className="flex gap-3">
              <button className="bg-accent text-white py-3 px-6 rounded-lg">
                Buy This Course
              </button>
              <button className="border border-white text-white py-3 px-6 rounded-lg">
                Add To Cart
              </button>
              <button className="border border-white text-white py-3 px-3 rounded-lg">
                <FaRegHeart className="text-2xl" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-5 text-center border-2 border-accent-dark rounded-lg max-w-xl">
          <div className="flex flex-col items-center gap-3">
            <Image
              src={details.author.pic}
              alt={details.author.name}
              width={70}
              height={70}
              className="rounded-full"
            />

            <p className="font-semibold">{details.author.name}</p>
          </div>

          <p>{details.author.title}</p>
          <p>{details.author.bio}</p>

          <button className="mt-4 border-2 border-white py-2 px-8 rounded-lg text-xl">
            View Profile
          </button>
        </div>

        <div className="absolute left-0 top-[95%] w-full bg-white text-primary shadow-lg rounded-lg p-4">
          <div className="flex justify-between">
            <div className="w-full px-5 border-r border-customGray">
              <h4 className="text-lg font-semibold">Modules</h4>
              <p className="text-sm text-customGray">
                {details.basicInfo.modulesCount} modules
              </p>
            </div>

            <div className="w-full px-5 border-r border-customGray">
              <h4 className="text-lg font-semibold">Duration</h4>
              <p className="text-sm text-customGray">
                {details.basicInfo.duration}
              </p>
            </div>

            <div className="w-full px-5 border-r border-customGray">
              <h4 className="text-lg font-semibold flex gap-1 items-center">
                <AiFillLike className="text-accent text-2xl" />
                {details.basicInfo.likes}
              </h4>
              <p className="text-sm text-customGray">Liked this course</p>
            </div>

            <div className="w-full px-5 border-r border-customGray">
              <h4 className="text-lg font-semibold flex gap-1 items-center">
                <IoStar className="text-accent text-2xl" />
                4.7
              </h4>
              <p className="text-sm text-customGray">
                Reviews ({details.basicInfo.rating.reviewsCount})
              </p>
            </div>

            <div className="w-full px-5 border-r border-customGray">
              <h4 className="text-lg font-semibold">
                {details.basicInfo.courseLevel.level} level
              </h4>
              <p className="text-sm text-customGray">
                {details.basicInfo.courseLevel.prerequesits}
              </p>
            </div>

            <div className="w-full px-5">
              <h4 className="text-lg font-semibold">Enrolled People</h4>
              <p className="text-sm text-customGray">
                Enrolled ({details.basicInfo.enrolledCount})
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-28">
        <div className="border-b">
          <div className="flex space-x-6">
            <button
              key={v4()}
              className="py-2 px-8 hover:text-black relative font-semibold text-black bg-gray-100 rounded-lg"
            >
              <Link href="#overview">
                <span>Overview</span>
                <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-gray-500"></span>
              </Link>
            </button>

            <button
              key={v4()}
              className="py-2 px-8 text-gray-600 hover:text-black relative"
            >
              <Link href="#modules">Modules</Link>
            </button>

            <button
              key={v4()}
              className="py-2 px-8 text-gray-600 hover:text-black relative"
            >
              <Link href="#reviews">Reviews</Link>
            </button>

            <button
              key={v4()}
              className="py-2 px-8 text-gray-600 hover:text-black relative"
            >
              <Link href="#instructor">Instructor Courses</Link>
            </button>

            <button
              key={v4()}
              className="py-2 px-8 text-gray-600 hover:text-black relative"
            >
              <Link href="#topInstructors"> Top Instructors</Link>
            </button>
          </div>
        </div>
      </section>

      <section className="mt-16 max-w-4xl" id="overview">
        <h2 className="text-2xl font-semibold">About This Course</h2>
        <p className="mt-8">{details.overview.desc}</p>

        <h3 className="text-2xl font-semibold mt-12">What you'll learn</h3>
        <div className="mt-8 flex flex-wrap gap-y-6">
          {details.overview.learningPoints.map((point) => (
            <div key={v4()} className="w-1/2 flex items-center gap-2">
              <FaCheck /> <p>{point}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mt-12">Pre-Requirements</h3>
        <div className="mt-8 flex flex-wrap gap-y-6">
          {details.overview.prerequesits.map((point) => (
            <div key={v4()} className="w-1/2 flex items-center gap-2">
              <FaCheck /> <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-4xl" id="modules">
        <h2 className="text-2xl font-semibold">
          There are {details.basicInfo.modulesCount} modules in this course
        </h2>

        <p className="mt-5">{details.modules.desc}</p>
      </section>

      <section className="mt-12 border-2 border-gray-400 rounded-lg p-8">
        {details.modules.data.map((module, i) => (
          <div key={v4()}>
            <h2 className="text-lg font-semibold">
              Module {i + 1} : {module.title}
            </h2>

            <p>{module.duration}</p>

            <div className="mt-6 space-y-4">
              <h6 className="flex items-center gap-2 text-lg font-semibold">
                <MdOndemandVideo /> {module.lessonsDesc}
              </h6>

              {module.lessons.map((lesson) => (
                <div key={v4()} className="flex justify-between">
                  <h6>{lesson.title}</h6>
                  <p>{lesson.duration}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <h6 className="flex items-center gap-2 text-lg font-semibold">
                <IoNewspaperOutline /> {module.assessmentsDesc}
              </h6>

              {module.assessments.map((assessment) => (
                <div key={v4()} className="flex justify-between">
                  <h6>{assessment.title}</h6>
                  <p>{assessment.duration}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <h6 className="flex items-center gap-2 text-lg font-semibold">
                <PiBookOpenText /> {module.readingsDesc}
              </h6>

              {module.readings.map((reading) => (
                <div key={v4()} className="flex justify-between">
                  <h6>{reading.title}</h6>
                  <p>{reading.duration}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mt-16" id="reviews">
        <h2 className="text-2xl font-semibold">Learner reviews</h2>

        <div className="mt-8 flex">
          <div className="w-1/2">
            <div className="p-10">
              <p className="text-gray-400">Reviews</p>
              <p className="text-4xl font-extrabold mt-3">
                {details.reviews.overview.rating}
              </p>
              <p className="text-2xl mt-3">
                <RatingRO rating={details.reviews.overview.rating} />
              </p>

              <p className="mt-2 text-gray-400">
                ({details.reviews.overview.totalReviews} Reviews)
              </p>

              <div className="space-y-3 mt-3">
                <div className="flex items-center gap-2 justify-between">
                  <p>5 Stars</p>
                  <div className="w-[90%]">
                    <Progress
                      rating={
                        (details.reviews.overview.five /
                          details.reviews.overview.totalReviews) *
                        100
                      }
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 justify-between">
                  <p>4 Stars</p>
                  <div className="w-[90%]">
                    <Progress
                      rating={
                        (details.reviews.overview.four /
                          details.reviews.overview.totalReviews) *
                        100
                      }
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 justify-between">
                  <p>3 Stars</p>
                  <div className="w-[90%]">
                    <Progress
                      rating={
                        (details.reviews.overview.three /
                          details.reviews.overview.totalReviews) *
                        100
                      }
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 justify-between">
                  <p>2 Stars</p>
                  <div className="w-[90%]">
                    <Progress
                      rating={
                        (details.reviews.overview.two /
                          details.reviews.overview.totalReviews) *
                        100
                      }
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 justify-between">
                  <p>1 Star</p>
                  <div className="w-[90%]">
                    <Progress
                      rating={
                        (details.reviews.overview.one /
                          details.reviews.overview.totalReviews) *
                        100
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            {details.reviews.reviewers.map((reviewer) => (
              <div key={v4()} className="p-4">
                <p className="text-gray-400 text-xs">{reviewer.date}</p>

                <div className="flex justify-between items-center">
                  <p className="text-accent">{reviewer.name}</p>
                  <RatingRO rating={reviewer.rating} />
                </div>

                <p className="text-gray-500">{reviewer.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const Progress = ({ rating }: { rating: number }) => {
  return (
    <div className="w-full bg-gray-200 rounded-lg h-2 overflow-hidden">
      <div
        className="bg-yellow-300 h-full text-white text-xs flex items-center justify-center font-bold transition-all duration-300"
        style={{
          width: `${rating}%`,
        }}
      />
    </div>
  );
};

export default Page;

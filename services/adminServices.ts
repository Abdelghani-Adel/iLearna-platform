import axiosInstance from "@/lib/axiosInstance";
import courses from "@/public/data/adminCourses.json";
import courseDetails from "@/public/data/adminCourseDetails.json";
import { IGetAdminCoursesList } from "@/types/api/responses/IGetAdminCoursesList";
import { IGetAdminCourseDetails } from "@/types/api/responses/IGetAdminCourseDetails";
import students from "@/public/data/students.json";
import freelancers from "@/public/data/freelancers.json";
import { ISystemFreelancer, ISystemStudent } from "@/types/api/responses/Users";

export async function getAdminCoursesList(): Promise<IGetAdminCoursesList> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return courses;
}

export async function getAdminCoursesDetails(): Promise<IGetAdminCourseDetails> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return courseDetails;
}

export async function getUsersList(): Promise<ISystemStudent[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return students;
}

export async function getFreelancersList(): Promise<ISystemFreelancer[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return freelancers;
}

export async function getInstructorsList(): Promise<ISystemFreelancer[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return freelancers;
}

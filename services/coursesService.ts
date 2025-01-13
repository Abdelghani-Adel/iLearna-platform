import recordedCourses from "@/public/data/recordedCourses.json";
import liveCourses from "@/public/data/liveCourses.json";
import { IGetCoursesRequest } from "@/types/api/requests/IGetCoursesRequest";
import { IGetItemsResponse } from "@/types/api/responses/IGetItemsResponse";

export async function getRecordedCourses(
  request: IGetCoursesRequest
): Promise<IGetItemsResponse> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    totalItems: 50,
    items: recordedCourses,
  };
}

export async function getRecordedCourseDetails() {}

export async function getLiveCourses(
  request: IGetCoursesRequest
): Promise<IGetItemsResponse> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    totalItems: 50,
    items: liveCourses,
  };
}

export async function getLiveCourseDetails() {}

export async function getCourseFilters() {}

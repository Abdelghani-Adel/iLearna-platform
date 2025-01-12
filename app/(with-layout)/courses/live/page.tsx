import Items from "@/components/molecules/Items/Items";
import { getLiveCourses } from "@/services/coursesService";
import { IGetCoursesRequest } from "@/types/api/requests/IGetCoursesRequest";
import React, { Suspense } from "react";

const page = async () => {
  const request: IGetCoursesRequest = {
    search: "",
    sortBy: "",
    paginateFrom: 0,
    paginateTo: 9,
    filters: [],
  };

  const courses = await getLiveCourses(request);

  return (
    <Suspense>
      <Items data={courses} title="ilearna live courses" productType="live" />
    </Suspense>
  );
};

export default page;

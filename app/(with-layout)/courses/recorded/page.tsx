"use server";
import Items from "@/components/molecules/Items/Items";
import { getRecordedCourses } from "@/services/itemsServices";
import { IGetItemsRequest } from "@/types/api/requests/Items";
import { Suspense } from "react";

const Page = async () => {
  const request: IGetItemsRequest = {
    search: "",
    sortBy: "",
    paginateFrom: 0,
    paginateTo: 9,
    filters: [],
  };

  const courses = await getRecordedCourses(request);

  return (
    <Suspense>
      <Items
        data={courses}
        title="ilearna recorded courses"
        productType="recorded"
      />
    </Suspense>
  );
};

export default Page;

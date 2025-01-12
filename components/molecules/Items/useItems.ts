import { getRecordedCourses } from "@/services/coursesService";
import { useState } from "react";
import { useEffect } from "react";
import {
  IGetCoursesFilter,
  IGetCoursesRequest,
} from "@/types/api/requests/IGetCoursesRequest";
import {
  IGetItemsResponse,
  IItem,
} from "@/types/api/responses/IGetItemsResponse";
import useIsFirstRender from "@/hooks/useIsFirstRender";

interface IUseItemsProps {
  data: IGetItemsResponse;
  productType: "recorded" | "live" | "books";
}

export const useItems = (props: IUseItemsProps) => {
  const { data, productType } = props;

  const isFirstRender = useIsFirstRender();
  const itemsPerPage = 9;
  const [items, setItems] = useState<IItem[]>(data.items);
  const [totalItems, setTotalItems] = useState<number>(data.totalItems);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [filters, setFilters] = useState<IGetCoursesFilter[]>([]);
  const [nextPaginateFrom, setNextPaginateFrom] = useState<number>(0);
  const [nextPaginateTo, setNextPaginateTo] = useState<number>(9);
  const [horizontal, setHorizontal] = useState<boolean>(false);

  useEffect(() => {
    console.log("isFirstRender " + isFirstRender);
    if (isFirstRender) {
      return;
    }

    console.log("fetched");

    // update items, totalItems, currentPage
    updateItems();
  }, [search, sortBy, filters, nextPaginateFrom, nextPaginateTo]);

  useEffect(() => {
    if (isFirstRender) return;

    // update pagination info to be ready for next fetch
    setNextPaginateFrom(currentPage * itemsPerPage);
    setNextPaginateTo(currentPage * itemsPerPage + itemsPerPage);
  }, [currentPage]);

  const updateItems = async () => {
    // preparing the request
    const reqBody: IGetCoursesRequest = {
      search,
      sortBy,
      filters,
      paginateFrom: nextPaginateFrom,
      paginateTo: nextPaginateTo,
    };

    // calling the api
    const response = await getRecordedCourses(reqBody);

    // update the items
    setItems(response.items);

    // update the total items
    setTotalItems(response.totalItems);

    // update the current page
    setCurrentPage(1);
  };

  // to be used in the pagination component
  const handlePageChange = (page: number) => setCurrentPage(page);

  // to be used in the filter component
  const handleFiltersChange = (filters: IGetCoursesFilter[]) => {
    setFilters(filters);
  };

  return {
    items,
    totalItems,
    currentPage,
    horizontal,
    filters,
    itemsPerPage,
    search,
    sortBy,
    setHorizontal,
    setSearch,
    setSortBy,
    handlePageChange,
    handleFiltersChange,
  };
};

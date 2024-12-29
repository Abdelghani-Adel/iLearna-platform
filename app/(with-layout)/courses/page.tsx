"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@/components/ui/Pagination";
import { BsGrid3X2Gap } from "react-icons/bs";
import { MdOutlineList } from "react-icons/md";

const Page = () => {
  const [items, setItems] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState<number>(30);
  const [itemsPerPage, setItemsPerPage] = useState<number>(9);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [filters, setFilters] = useState<any[]>([]);
  const [nextPaginateFrom, setNextPaginateFrom] = useState<number>();
  const [nextPaginateTo, setNextPaginateTo] = useState<number>(0);

  useEffect(() => {
    fetchItems();

    // update the items

    // update the total items

    // update the current page
  }, [search, sortBy, filters, nextPaginateFrom, nextPaginateTo]);

  useEffect(() => {
    setNextPaginateFrom(currentPage * itemsPerPage);
    setNextPaginateTo(currentPage * itemsPerPage + itemsPerPage);
  }, [currentPage]);

  const fetchItems = async () => {
    const reqBody = {
      search,
      sortBy,
      filters,
      paginateFrom: nextPaginateFrom,
      paginateTo: nextPaginateTo,
    };

    console.log(reqBody);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4 grid grid-cols-4 gap-4">
      <div className="border border-2 row-start-2 col-span-4 2xl:row-start-1 2xl:col-span-1">
        ilearna title
      </div>

      <div className="border border-2 col-start-2 col-span-3 2xl:col-start-4 2xl:col-span-1">
        <div className="hidden 2xl:flex space-x-2">
          <BsGrid3X2Gap /> <MdOutlineList />
        </div>
        <div>sort options</div>
      </div>

      <div className="border border-2 row-start-1 2xl:row-start-2 2xl:col-span-1">
        filter
      </div>

      <div className="border border-2 col-span-4 2xl:row-start-2 2xl:col-span-3">
        courses
      </div>

      <div className="border border-2 col-span-4 2xl:col-start-3 2xl:col-span-1">
        <div className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;

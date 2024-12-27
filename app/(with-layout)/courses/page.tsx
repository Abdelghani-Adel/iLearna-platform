"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@/components/ui/Pagination";

const Page = () => {
  const [items, setItems] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState<number>(100);
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
    <div>
      Courses
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Page;

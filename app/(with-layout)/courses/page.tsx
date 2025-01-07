"use client";
import FilterItems from "@/components/molecules/FilterItems";
import ItemCard from "@/components/molecules/ItemCard";
import Pagination from "@/components/ui/Pagination";
import { useEffect, useState } from "react";
import { BsGrid3X2Gap } from "react-icons/bs";
import { MdOutlineList } from "react-icons/md";
import data from "@/public/data/recordedCourses.json";
import filterCategories from "@/public/data/filters.json";
import FilterCategories from "@/components/molecules/FilterCategories";

export interface IFilter {
  category: string;
  filters: string[];
}

const Page = () => {
  const [items, setItems] = useState<any[]>(data);
  const [totalItems, setTotalItems] = useState<number>(30);
  const [itemsPerPage, setItemsPerPage] = useState<number>(9);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [filters, setFilters] = useState<IFilter[]>([]);
  const [nextPaginateFrom, setNextPaginateFrom] = useState<number>();
  const [nextPaginateTo, setNextPaginateTo] = useState<number>(0);
  const [horizontal, setHorizontal] = useState<boolean>(false);

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

  const handleFiltersChange = (filters: IFilter[]) => {
    setFilters(filters);
  };

  return (
    <div className="p-4 grid grid-cols-4 gap-6">
      <div className="row-start-2 col-span-4 2xl:row-start-1 2xl:col-span-1">
        <h1 className="text-2xl font-bold text-accent">
          iLearna Recorded Courses
        </h1>
      </div>

      <div className="col-start-2 col-span-3 2xl:col-start-4 2xl:col-span-1 flex justify-between items-center">
        <div className="hidden 2xl:flex space-x-2 text-2xl">
          <button
            onClick={() => setHorizontal(false)}
            className={`${horizontal ? "text-gray-400" : "text-accent"}`}
          >
            <BsGrid3X2Gap />
          </button>
          <button
            onClick={() => setHorizontal(true)}
            className={`${horizontal ? "text-accent" : "text-gray-400"}`}
          >
            <MdOutlineList />
          </button>
        </div>

        <div>sort options</div>
      </div>

      <div className="row-start-1 2xl:row-start-2 2xl:col-span-1">
        {/* <FilterItems
          handleFiltersChange={handleFiltersChange}
          filterCategories={filterCategories}
        /> */}

        <FilterCategories onFiltersChange={handleFiltersChange} />
      </div>

      <div className="col-span-4 2xl:row-start-2 2xl:col-span-3">
        <div
          className={`grid grid-cols-1  gap-4 ${
            horizontal ? "grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {items.map((item) => (
            <ItemCard
              key={item.id}
              baseHref=""
              title={item.title}
              duration={item.duration}
              durationDesc={item.durationDesc}
              image={item.image}
              rating={item.rating}
              price={item.price}
              oldPrice={item.oldPrice}
              description={item.description}
              horizontal={horizontal}
            />
          ))}
        </div>
      </div>

      <div className="col-span-4 2xl:col-start-3 2xl:col-span-1">
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

"use client";
import { IFilter } from "@/app/(with-layout)/courses/page";
import categories from "@/public/data/filters.json";
import FilterCategory from "./FilterCategory";
import { useFilterState } from "./useFilterState";
import { FC } from "react";

interface IFilterCategoriesProps {
  onFiltersChange: (filters: IFilter[]) => void;
}

const FilterCategories: FC<IFilterCategoriesProps> = ({ onFiltersChange }) => {
  const filterState = useFilterState(onFiltersChange);
  const { selectedFilters, handleCheckboxChange, clearFilters } = filterState;

  return (
    <>
      <button
        onClick={clearFilters}
        className="text-accent block ml-auto mt-4 me-4 font-semibold"
      >
        Clear Filters
      </button>

      {categories.map((category) => (
        <FilterCategory
          key={category.categoryCode}
          category={category}
          onCheckboxChange={handleCheckboxChange}
          selectedFilters={selectedFilters}
        />
      ))}
    </>
  );
};

export default FilterCategories;

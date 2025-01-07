"use client";
import { IFilterCategory } from "@/types/api_responses/IGetFilters";
import { FC, useState } from "react";
import { IoChevronDown, IoFilterOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface IFilter {
  category: string;
  selectedFilters: string[];
}

interface FilterItemsProps {
  handleFiltersChange: (filters: IFilter[]) => void;
  filterCategories: IFilterCategory[];
}

const FilterItems: FC<FilterItemsProps> = (props) => {
  const { handleFiltersChange, filterCategories } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<IFilter[]>([]);

  const updateFilters = (categoryName: string, filterValue: string) => {
    setSelectedFilters((prevFilters) => {
      const existingFilter = prevFilters.find(
        (filter) => filter.category === categoryName
      );

      if (existingFilter) {
        // If the filter value is already selected, remove it
        const updatedSelectedFilters = existingFilter.selectedFilters.includes(
          filterValue
        )
          ? existingFilter.selectedFilters.filter(
              (value) => value !== filterValue
            )
          : [...existingFilter.selectedFilters, filterValue];

        return prevFilters.map((filter) =>
          filter.category === categoryName
            ? { ...filter, selectedFilters: updatedSelectedFilters }
            : filter
        );
      } else {
        // If the category doesn't exist, add a new filter
        return [
          ...prevFilters,
          { category: categoryName, selectedFilters: [filterValue] },
        ];
      }
    });
  };

  const applyFilters = () => {
    handleFiltersChange(selectedFilters);
  };

  return (
    <>
      <div className="md:hidden">
        <ShowFilters onOpen={() => setIsOpen(true)} />
      </div>

      <div className="md:hidden">
        <div
          className={`fixed top-0 w-screen h-screen z-10 bg-white transition-all duration-300 ${
            isOpen ? "right-0" : "right-[-100vw]"
          }`}
        >
          <div className="px-4 py-3 text-2xl border-b border-accent-light w-full">
            <button onClick={() => setIsOpen(false)}>
              <MdKeyboardDoubleArrowRight />
            </button>
          </div>

          {filterCategories.map((category) => (
            <FilterCategory
              category={category}
              handleFilterChange={updateFilters}
            />
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        {filterCategories.map((category) => (
          <FilterCategory
            category={category}
            handleFilterChange={updateFilters}
          />
        ))}
      </div>
    </>
  );
};

const ShowFilters = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <button
      className="flex items-center gap-2 border p-2 rounded-sm justify-center"
      onClick={onOpen}
    >
      <IoFilterOutline />
      <span>Filters</span>
    </button>
  );
};

interface FilterCategoryProps {
  handleFilterChange: (categoryName: string, filterValue: string) => void;
  category: IFilterCategory;
}

const FilterCategory: FC<FilterCategoryProps> = (props) => {
  const { category, handleFilterChange } = props;

  return (
    <div
      key={category.categoryName}
      className="border-b md:border md:mb-5 border-accent-light p-4 rounded-sm w-full space-y-3"
    >
      <div className="flex items-center justify-between text-accent">
        <h3 className="font-semibold">{category.categoryLabel}</h3>
      </div>

      <div className="space-y-2">
        {category.options.map((option) => {
          return (
            <CheckboxFilter
              key={option.optionValue}
              categoryName={category.categoryName}
              filterLabel={option.optionLabel}
              filterValue={option.optionValue}
              handleFilterChange={handleFilterChange}
            />
          );
        })}
      </div>
    </div>
  );
};

interface CheckboxFilterProps {
  categoryName: string;
  filterLabel: string;
  filterValue: string;
  handleFilterChange: (categoryName: string, filterValue: string) => void;
}

const CheckboxFilter: FC<CheckboxFilterProps> = (props) => {
  const { categoryName, filterLabel, filterValue, handleFilterChange } = props;

  return (
    <div className="flex justify-between items-center border border-accent-light p-2 rounded-sm">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id={props.filterValue}
          name={props.filterValue}
          onChange={() => handleFilterChange(categoryName, filterValue)}
        />
        <label htmlFor={props.filterValue}>{props.filterLabel}</label>
      </div>
    </div>
  );
};

export default FilterItems;

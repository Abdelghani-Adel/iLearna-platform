import React, { FC, useEffect, useState } from "react";
import categories from "@/public/data/filters.json";
import {
  IFilterCategory,
  IFilterOption,
} from "@/types/api_responses/IGetFilters";
import { IFilter } from "@/app/(with-layout)/courses/page";
interface IFilterCategoriesProps {
  onFiltersChange: (filters: IFilter[]) => void;
}

const FilterCategories = (props: IFilterCategoriesProps) => {
  const { onFiltersChange } = props;
  const [selectedFilters, setSelectedFilters] = useState<IFilter[]>([]);

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  const applyFilters = () => {
    onFiltersChange(selectedFilters);
  };

  const handleCheckboxChange = (categoryCode: string, optionCode: string) => {
    setSelectedFilters((prev) => {
      // Create a deep copy the previous state
      const newSelectedFilters = prev.map((filter) => ({
        ...filter,
        filters: [...filter.filters],
      }));

      // Find the category index
      const categoryIndex = newSelectedFilters.findIndex(
        (filter) => filter.category === categoryCode
      );

      // If the category exists, update the selected filters
      if (categoryIndex !== -1) {
        // Check if the option is already selected
        const isOptionSelected =
          newSelectedFilters[categoryIndex].filters.includes(optionCode);

        // If the option is already selected, remove it
        if (isOptionSelected) {
          newSelectedFilters[categoryIndex].filters = newSelectedFilters[
            categoryIndex
          ].filters.filter((item) => item !== optionCode);

          // If the category has no filters, remove it
          if (newSelectedFilters[categoryIndex].filters.length === 0) {
            newSelectedFilters.splice(categoryIndex, 1);
          }
        }
        // If the option is not selected, add it
        else {
          newSelectedFilters[categoryIndex].filters.push(optionCode);
        }
      }

      // If the category does not exist, add it
      else {
        newSelectedFilters.push({
          category: categoryCode,
          filters: [optionCode],
        });
      }

      // Return the new state
      return newSelectedFilters;
    });
  };

  useEffect(() => {
    applyFilters();
  }, [selectedFilters]);

  return (
    <div>
      <button
        onClick={clearFilters}
        className="text-accent block ml-auto mb-2 font-semibold"
      >
        Clear Filters
      </button>

      {categories.map((category) => (
        <Category
          key={category.categoryCode}
          category={category}
          onCheckboxChange={handleCheckboxChange}
          selectedFilters={selectedFilters}
        />
      ))}
    </div>
  );
};

interface CategoryProps {
  category: IFilterCategory;
  onCheckboxChange: (categoryCode: string, optionCode: string) => void;
  selectedFilters: IFilter[];
}

const Category: FC<CategoryProps> = (props) => {
  const { category, onCheckboxChange, selectedFilters } = props;

  return (
    <div className="border-b md:border md:mb-5 border-accent-light p-4 rounded-sm w-full space-y-3">
      <div className="flex items-center justify-between text-accent">
        <h3 className="font-semibold">{category.categoryLabel}</h3>
      </div>

      <div className="space-y-2">
        {category.options.map((option) => {
          return (
            <Option
              key={option.optionCode}
              option={option}
              onCheckboxChange={onCheckboxChange}
              selectedFilters={selectedFilters}
              categoryCode={category.categoryCode}
            />
          );
        })}
      </div>
    </div>
  );
};

interface OptionProps {
  option: IFilterOption;
  onCheckboxChange: (categoryCode: string, optionCode: string) => void;
  selectedFilters: IFilter[];
  categoryCode: string;
}

const Option: FC<OptionProps> = (props) => {
  const { option, onCheckboxChange, selectedFilters, categoryCode } = props;
  return (
    <div
      key={option.optionCode}
      className="flex justify-between items-center border border-accent-light p-2 rounded-sm"
    >
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id={option.optionCode}
          name={option.optionCode}
          checked={selectedFilters.some(
            (filter) =>
              filter.category === categoryCode &&
              filter.filters.includes(option.optionCode)
          )}
          onChange={() => onCheckboxChange(categoryCode, option.optionCode)}
        />
        <label htmlFor={option.optionCode}>{option.optionLabel}</label>
      </div>
    </div>
  );
};

export default FilterCategories;

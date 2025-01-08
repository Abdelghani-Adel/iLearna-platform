"use client";
import React, { useState } from "react";
import FilterCategories from "./FilterCategoryList";
import { FC } from "react";
import MobileItemsFilter from "./MobileItemsFilter";
import { ISelectedCategoryFilters } from "@/types/api/filter";

interface IProps {
  onFiltersChange: (filters: ISelectedCategoryFilters[]) => void;
}

const ItemsFilter: FC<IProps> = (props) => {
  const { onFiltersChange } = props;
  return (
    <>
      <div className="xl:hidden">
        <MobileItemsFilter onFiltersChange={onFiltersChange} />
      </div>

      <div className="hidden xl:block">
        <DesktopItemsFilter onFiltersChange={onFiltersChange} />
      </div>
    </>
  );
};

const DesktopItemsFilter: FC<IProps> = ({ onFiltersChange }) => {
  return <FilterCategories onFiltersChange={onFiltersChange} />;
};

export default ItemsFilter;

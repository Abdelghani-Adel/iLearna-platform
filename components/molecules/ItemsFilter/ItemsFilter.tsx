"use client";
import React, { useState } from "react";
import FilterCategories from "./FilterCategoryList";
import { IFilter } from "@/app/(with-layout)/courses/page";
import { FC } from "react";
import MobileItemsFilter from "./MobileItemsFilter";

interface IProps {
  onFiltersChange: (filters: IFilter[]) => void;
}

const ItemsFilter: FC<IProps> = (props) => {
  const { onFiltersChange } = props;
  return (
    <>
      <div className="md:hidden">
        <MobileItemsFilter onFiltersChange={onFiltersChange} />
      </div>

      <div className="hidden md:block">
        <DesktopItemsFilter onFiltersChange={onFiltersChange} />
      </div>
    </>
  );
};

const DesktopItemsFilter: FC<IProps> = ({ onFiltersChange }) => {
  return <FilterCategories onFiltersChange={onFiltersChange} />;
};

export default ItemsFilter;

export type ICourseFilter = ICheckboxFilter | IRadioFilter;

export interface ICheckboxFilter {
  filterName: string;
  selectedFilters: string[];
}

export interface IRadioFilter {
  filterName: string;
  selectedFilter: string;
}

export interface IGetItemsRequest {
  search: string;
  sortBy: string;
  paginateFrom: number;
  paginateTo: number;
  filters: IGetItemsFilter[];
}

export interface IGetItemsFilter {
  category: string;
  filters: string[];
}

export interface IItemsFilterCategory {
  categoryCode: string;
  categoryLabel: string;
  options: IItemsFilterOption[];
}

export interface IItemsFilterOption {
  optionLabel: string;
  optionCode: string;
}

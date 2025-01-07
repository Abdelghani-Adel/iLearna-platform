export interface IFilterCategory {
  categoryLabel: string;
  categoryCode: string;
  options: IFilterOption[];
}

export interface IFilterOption {
  optionLabel: string;
  optionCode: string;
}

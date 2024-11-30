import { atom } from "recoil";

export type ProductSearchFilter = {
  page: number;
  size: number;
  titleKeyword: string;
};

export const initialProductSearchFilter: ProductSearchFilter = {
  page: 0,
  size: 10,
  titleKeyword: "",
};

export const productSearchFilter = atom<ProductSearchFilter>({
  key: "productSearchFilter",
  default: initialProductSearchFilter,
});

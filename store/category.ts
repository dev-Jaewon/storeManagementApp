import { atom } from "recoil";

export type Category = {
  text: string;
  code: string;
};

export const initialCategory: Category = {
  text: "",
  code: "",
};

export const category = atom<Category>({
  key: "category",
  default: initialCategory,
});

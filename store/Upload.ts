import { Option } from "@/src/ui/upload/Options";
import { ImageData } from "@/src/util/typeApi/SearchType";
import { atom } from "recoil";

export type UploadProductInfo = {
  productName: string;
  category: string;
  brandName: string;
  margin: number;
  sale: number;
  sellPrice: number;
  originPrice: number;
  country: string;
  profit: number;
  exchangeCurrencyPrice: number;
  originProductUrl: string;
  images: ImageData[];
  options: Option[];
};

export const initialUploadProductInfo: UploadProductInfo = {
  productName: "",
  category: "",
  originPrice: 0,
  originProductUrl: "",
  brandName: "",
  country: "",
  margin: 15,
  sale: 2,
  sellPrice: 0,
  profit: 0,
  exchangeCurrencyPrice: 0,
  images: [],
  options: [],
};

export const uploadProductInfo = atom<UploadProductInfo>({
  key: "uploadProductInfo",
  default: initialUploadProductInfo,
});

// export type ProductDetail = {
//   options: Array<any>;
// }

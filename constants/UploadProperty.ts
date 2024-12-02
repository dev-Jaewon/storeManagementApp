import { UploadProductInfo } from "@/store/Upload";

export const UPLOAD_PROPERTY: Record<keyof UploadProductInfo, string> = {
  productName: "상품명",
  category: "카테고리",
  brandName: "브랜드명",
  margin: "마진",
  sale: "할인",
  sellPrice: "판매가",
  originPrice: "원래가격",
  country: "국가",
  profit: "수익",
  exchangeCurrencyPrice: "환율가격",
  originProductUrl: "원래상품URL",
  images: "이미지",
  options: "옵션",
};

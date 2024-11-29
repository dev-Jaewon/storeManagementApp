import axios from "axios";
import { ResponseSearch } from "./typeApi/SearchType";
import {
  RequestSearchProduct,
  ResponseSearchProduct,
  ResponseSearchProductDetail,
} from "./typeApi/SearchProductType";
import { ResponseExchangeCurrency } from "./typeApi/ExchangeCurrency";
import { ResponseWeightPerPrice } from "./typeApi/WeightPerPriceType";
import { RequestCalculatePrice } from "./typeApi/CalculatePrice";
import { ResponseCalculatePrice } from "./typeApi/CalculatePrice";
import { ResponseCategory } from "./typeApi/CategoryType";
import {
  RequestUploadProduct,
  ResponseUploadProduct,
} from "./typeApi/UploadType";

const api = axios.create({
  // baseURL: 'http://localhost:8080'
  baseURL: "http://app235.iptime.org:8080",
});

export const getSearchList = async (): Promise<ResponseSearch[]> => {
  const response = await api.get("/crawling");
  return response.data;
};

export const searchProduct = async (
  data: RequestSearchProduct
): Promise<ResponseSearchProduct> => {
  const response = await api.post("/crawling", data);
  return response.data;
};

export const getSearchProductDetail = async (
  id: string
): Promise<ResponseSearchProductDetail> => {
  const response = await api.get(`/crawling/${id}`);
  return response.data;
};

export const getExchangeCurrency =
  async (): Promise<ResponseExchangeCurrency> => {
    const response = await api.get("/exchange_new");
    return response.data;
  };

export const getWeightPerPrice = async (
  weight: number
): Promise<ResponseWeightPerPrice> => {
  const response = await api.get(`/price/weight?weight=${weight}`);
  return response.data;
};

export const calculatePrice = async (
  data: RequestCalculatePrice
): Promise<ResponseCalculatePrice> => {
  const response = await api.post("/exchange/calculate/sellprice", data);
  return response.data;
};

export const getCategory = async (
  keyword: string
): Promise<ResponseCategory> => {
  const response = await api.get(`/fast_category/${keyword}`);
  return response.data;
};

export const uploadProduct = async (
  data: RequestUploadProduct
): Promise<ResponseUploadProduct> => {
  const response = await api.post("/naver/upload", data);
  return response.data;
};

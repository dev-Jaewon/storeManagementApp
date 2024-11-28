import axios from "axios"
import { ResponseSearch } from "./typeApi/SearchType";
import { RequestSearchProduct, ResponseSearchProduct } from "./typeApi/SearchProductType";

const api = axios.create({
  baseURL: 'http://localhost:8080'
});


export const getSearchList = async (): Promise<ResponseSearch[]> => {
  const response = await api.get('/crawling');
  return response.data
}

export const searchProduct = async (data: RequestSearchProduct): Promise<ResponseSearchProduct> => {
  const response = await api.post('/crawling', data);
  return response.data
}
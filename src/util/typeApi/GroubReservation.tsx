import { ImageData } from "./SearchType";

export type GroubReservationItem = {
  id: number;
  price: number;
  search_url: string;
  thumbnail: string;
  title: string;
  url: string;
  image_data: ImageData[];
};

export type ResponseGroubReservation = {
  list: GroubReservationItem[];
  totalCount: number;
};
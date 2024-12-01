import { Product } from "./ProductsType";

export type ResponseOrderCount = {
  dispatched: number;
  purchaseDecided: number;
  claimRequested: number;
  payed: number;
};

export type RequestOrderInfo =
  | "payed"
  | "dispatched"
  | "claimRequested"
  | "purchaseDecided";

export type ResponseOrderInfo = Product[];

export type RequestProducts = productsPageInfo;
export type ResponseProduct = Product;

export type productsPageInfo = {
  page: number;
  size: number;
  titleKeyword: string;
};

export type ResponseProducts = {
  lastPage: number;
  totalCount: number;
  list: Product[];
};

export type Product = {
  account_id: number;
  createat: string;
  id: number;
  image: string;
  link_product: string;
  link_store: string;
  originproductno: string;
  title: string;
  price: ProductPrice;
  detail_text: string[];
  brand: string;
};

export type ProductPrice = {
  exchange_currency: string;
  exchange_currency_price: number;
  id: number;
  krw_price: string;
  margin: number;
  origin_price: number;
  profit: number;
};

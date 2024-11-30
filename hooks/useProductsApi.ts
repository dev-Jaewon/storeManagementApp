import { getProducts } from "@/src/util/api";
import { productSearchFilter } from "@/store/ProductSearchFilter";
import { useRecoilValue } from "recoil";
import { useQuery } from "@tanstack/react-query";

export const useProductsApi = () => {
  const { page, size, titleKeyword } = useRecoilValue(productSearchFilter);

  const query = useQuery({
    queryKey: ["products", page, size, titleKeyword],
    queryFn: () =>
      getProducts({
        page,
        size,
        titleKeyword,
      }),
  });

  return query;
};

import { getProducts } from "@/src/util/api";
import { productSearchFilter } from "@/store/ProductSearchFilter";
import { useRecoilValue } from "recoil";
import { useQuery } from "@tanstack/react-query";

export const useProductsApi = () => {
  const { page, size, titleKeyword } = useRecoilValue(productSearchFilter);

  const query = useQuery({
    queryKey: ["searchProducts", page, size, titleKeyword],
    queryFn: () =>
      getProducts({
        page,
        size,
        titleKeyword,
      }),
    refetchOnWindowFocus: false,
    staleTime: 600000,
  });

  return query;
};

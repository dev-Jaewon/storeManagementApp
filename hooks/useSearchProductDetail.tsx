import { getSearchProductDetail } from "@/src/util/api";
import { useQuery } from "@tanstack/react-query";

export const useSearchProductDetail = (id: string) => {
  const searchQuery = useQuery({
    queryKey: ["search"],
    queryFn: () => getSearchProductDetail(id),
  });

  return searchQuery;
};

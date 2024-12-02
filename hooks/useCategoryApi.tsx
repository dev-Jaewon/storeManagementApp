import { getCategory } from "@/src/util/api";
import { useQuery } from "@tanstack/react-query";

export const useCategoryApi = (keyword: string) => {
  const query = useQuery({
    queryKey: ["category", keyword],
    queryFn: () => getCategory(keyword),
    enabled: keyword.length > 0,
  });

  return query;
};

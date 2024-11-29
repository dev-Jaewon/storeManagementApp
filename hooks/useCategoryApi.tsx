import { getCategory } from "@/src/util/api";
import { QueryKey, useQuery } from "@tanstack/react-query";

type UseCategoryApiProps = {
  keyword: string;
  queryKey?: QueryKey;
};

export const useCategoryApi = ({ keyword, queryKey }: UseCategoryApiProps) => {
  const query = useQuery({
    queryKey: ["category", ...(queryKey || [])],
    queryFn: () => getCategory(keyword),
    enabled: keyword.length > 0,
  });

  return query;
};

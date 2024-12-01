import { getOrderInfo } from "@/src/util/api";
import { RequestOrderInfo } from "@/src/util/typeApi/OrderState";
import { useQuery } from "@tanstack/react-query";

export const useOrderInfoApi = (state: RequestOrderInfo) => {
  const orderInfoQuery = useQuery({
    queryKey: ["order-info", state],
    queryFn: () => getOrderInfo(state),
  });

  return orderInfoQuery;
};

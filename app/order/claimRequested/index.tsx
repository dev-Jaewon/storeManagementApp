import { useOrderInfoApi } from "@/hooks/useOrderInfoApi";
import { Layout } from "@/src/ui/common/Layout";
import { OrderHeader } from "@/src/ui/order/OrderHeader";
import { OrderListView } from "@/src/ui/order/OrderListView";

const ClaimRequested = () => {
  const orderInfoQuery = useOrderInfoApi("claimRequested");

  return (
    <Layout>
      <OrderHeader text="주문취소" />
      <OrderListView
        list={orderInfoQuery.data}
        isLoading={orderInfoQuery.isLoading}
      />
    </Layout>
  );
};

export default ClaimRequested;

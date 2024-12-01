import { useOrderInfoApi } from "@/hooks/useOrderInfoApi";
import { Layout } from "@/src/ui/common/Layout";
import { OrderHeader } from "@/src/ui/order/OrderHeader";
import { OrderListView } from "@/src/ui/order/OrderListView";

const Dispatched = () => {
  const orderInfoQuery = useOrderInfoApi("dispatched");

  return (
    <Layout>
      <OrderHeader text="배송 중 | 완료" />
      <OrderListView
        list={orderInfoQuery.data}
        isLoading={orderInfoQuery.isLoading}
      />
    </Layout>
  );
};

export default Dispatched;

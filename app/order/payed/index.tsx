import { useOrderInfoApi } from "@/hooks/useOrderInfoApi";
import { Layout } from "@/src/ui/common/Layout";
import { OrderHeader } from "@/src/ui/order/OrderHeader";
import { OrderListView } from "@/src/ui/order/OrderListView";

const Payed = () => {
  const orderInfoQuery = useOrderInfoApi("payed");

  return (
    <Layout>
      <OrderHeader text="신규주문" />
      <OrderListView
        list={orderInfoQuery.data}
        isLoading={orderInfoQuery.isLoading}
      />
    </Layout>
  );
};

export default Payed;

import { useOrderInfoApi } from "@/hooks/useOrderInfoApi";
import { Layout } from "@/src/ui/common/Layout";
import { OrderHeader } from "@/src/ui/order/OrderHeader";
import { OrderListView } from "@/src/ui/order/OrderListView";

const PurchaseDecided = () => {
  const orderInfoQuery = useOrderInfoApi("purchaseDecided");

  return (
    <Layout>
      <OrderHeader text="구매확정" />
      <OrderListView
        list={orderInfoQuery.data}
        isLoading={orderInfoQuery.isLoading}
      />
    </Layout>
  );
};

export default PurchaseDecided;

import { View, StyleSheet } from "react-native";
import { DashbordItem } from "./DashbordItem";
import { getOrderCount } from "@/src/util/api";
import { useQuery } from "@tanstack/react-query";

export const DashbordView = () => {
  const orderCountQuery = useQuery({
    queryKey: ["orderCount"],
    queryFn: getOrderCount,
  });

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <DashbordItem
          title="신규주문"
          routerPath="/order/payed"
          count={orderCountQuery.data?.payed || 0}
        />
        <DashbordItem
          title="배송 중 | 완료"
          routerPath="/order/dispatched"
          count={orderCountQuery.data?.dispatched || 0}
        />
      </View>
      <View style={styles.row}>
        <DashbordItem
          title="주문취소"
          routerPath="/order/claimRequested"
          count={orderCountQuery.data?.claimRequested || 0}
        />
        <DashbordItem
          title="구매확정"
          routerPath="/order/purchase-decided"
          count={orderCountQuery.data?.purchaseDecided || 0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    gap: 16,
  },
});

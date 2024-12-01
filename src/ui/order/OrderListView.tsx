import { Product } from "@/src/util/typeApi/ProductsType";
import { StyleSheet, ScrollView, ActivityIndicator, View } from "react-native";
import { ProductListItem } from "../products/ProductListItem";
import { Icons } from "../common/Icons";
import { CommText } from "../common/CommText";

type OrderListViewProps = {
  list: Product[] | undefined;
  isLoading: boolean;
};

export const OrderListView = ({ list, isLoading }: OrderListViewProps) => {
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!list || list.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Icons.Document width={40} height={40} />
        <CommText style={styles.emptyText}>내역이 없습니다.</CommText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CommText style={styles.totalText}>총 {list.length}건</CommText>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}
      >
        {list?.map((item, index) => (
          <ProductListItem product={item} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    gap: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#999",
  },
  totalText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 16,
  },
});

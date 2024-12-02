import { useProductsApi } from "@/hooks/useProductsApi";
import { StyleSheet, ScrollView, ActivityIndicator, View } from "react-native";
import { ProductListItem } from "./ProductListItem";
import { NoSearchData } from "../common/NoSearchData";

export const ProductSearchList = () => {
  const { data, isFetching } = useProductsApi();

  if (isFetching) {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.container}
      >
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </ScrollView>
    );
  }

  if (data?.list?.length === 0) {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.container}
      >
        <NoSearchData />
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {data?.list?.map((product: any) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  content: {
    gap: 16,
    paddingVertical: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

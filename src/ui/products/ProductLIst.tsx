import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";

import { useProductsApi } from "@/hooks/useProductsApi";
import { ProductListItem } from "./ProductListItem";
import { ErrorPage } from "../common/ErrorPage";

export const ProductList = () => {
  const productsQuery = useProductsApi();

  if (productsQuery.isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (productsQuery.error) {
    return <ErrorPage />;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.listContainer}>
          {productsQuery.data?.list.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    gap: 20,
    padding: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    textAlign: "center",
  },
  scrollView: {
    flex: 1,
  },
});

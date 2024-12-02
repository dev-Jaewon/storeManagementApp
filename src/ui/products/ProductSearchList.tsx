import { useProductsApi } from "@/hooks/useProductsApi";
import { StyleSheet, ScrollView, ActivityIndicator, View } from "react-native";
import { ProductListItem } from "./ProductListItem";
import { NoSearchData } from "../common/NoSearchData";
import { CommText } from "../common/CommText";

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
    <>
      <CommText style={styles.resultText}>
        검색 결과 : {data?.list?.length}개
      </CommText>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        {data?.list?.map((product: any) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  content: {
    gap: 16,
    paddingBottom: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  resultText: {
    fontSize: 17,
    fontWeight: "bold",
    paddingVertical: 16,
    paddingLeft: 16,
  },
});

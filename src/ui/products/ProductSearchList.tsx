import { useProductsApi } from "@/hooks/useProductsApi";
import { StyleSheet, ScrollView, ActivityIndicator, View } from "react-native";
import { ProductListItem } from "./ProductListItem";
import { NoSearchData } from "../common/NoSearchData";
import { CommText } from "../common/CommText";
import { useRecoilState } from "recoil";
import { productSearchFilter } from "@/store/ProductSearchFilter";

export const ProductSearchList = () => {
  const { data, isFetching } = useProductsApi();
  const [searchFilter, setSearchFilter] = useRecoilState(productSearchFilter);

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
        검색 결과 : {data?.totalCount}개
      </CommText>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        onScroll={(e) => {
          const { layoutMeasurement, contentOffset, contentSize } =
            e.nativeEvent;

          const allowableValue = 5;

          if (
            layoutMeasurement.height + contentOffset.y + contentSize.height ===
            0
          ) {
            return;
          }

          if (
            contentSize.height - allowableValue <=
            layoutMeasurement.height + contentOffset.y
          ) {
            console.log(searchFilter.page);
            if (data?.lastPage && data?.lastPage <= searchFilter.page + 1)
              setSearchFilter((prev) => ({ ...prev, size: prev.size + 1 }));
          }
        }}
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

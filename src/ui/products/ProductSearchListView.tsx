import { productSearchFilter } from "@/store/ProductSearchFilter";
import { View, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import { ProductSearchList } from "./ProductSearchList";

export const ProductSearchListView = () => {
  const searchFilter = useRecoilValue(productSearchFilter);

  if (!searchFilter.titleKeyword) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <ProductSearchList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import { View, StyleSheet } from "react-native";
import { Layout } from "@/src/ui/common/Layout";
import { ProductSearch as ProductSearchView } from "@/src/ui/products/ProductSearch";
import { ProductSearchListView } from "@/src/ui/products/ProductSearchListView";

export default function ProductSearch() {
  return (
    <Layout>
      <View style={styles.container}>
        <ProductSearchView />
        <ProductSearchListView />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

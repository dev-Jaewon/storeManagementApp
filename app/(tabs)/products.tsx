import { View, StyleSheet } from "react-native";
import { ProductList } from "@/src/ui/products/ProductLIst";
import { ProductSearchView } from "@/src/ui/products/ProductSearchView";
import { AppNotificationHeader } from "@/src/ui/common/AppNotificationHeader";
import { Layout } from "@/src/ui/common/Layout";

export default function Products() {
  return (
    <Layout>
      <View style={[styles.container]}>
        <AppNotificationHeader />
        <ProductSearchView />
        <ProductList />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

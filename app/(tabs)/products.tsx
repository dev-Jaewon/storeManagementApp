import { View, StyleSheet } from "react-native";
import { ProductList } from "@/src/ui/products/ProductLIst";
import { ProductSearchView } from "@/src/ui/products/ProductSearchView";
import { AppNotificationHeader } from "@/src/ui/common/AppNotificationHeader";

export default function Products() {
  return (
    <View style={[styles.container]}>
      <AppNotificationHeader />
      <ProductSearchView />
      <ProductList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

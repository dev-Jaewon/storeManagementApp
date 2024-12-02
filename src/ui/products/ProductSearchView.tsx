import { View, StyleSheet, Platform } from "react-native";
import { ProductSearchBar } from "./ProductSearchBar";
import { ProductFilter } from "./ProductFilter";

export const ProductSearchView = () => {
  return (
    <View
      style={[styles.container, Platform.OS === "web" && styles.web_container]}
    >
      <ProductSearchBar />
      <ProductFilter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 16,
    paddingHorizontal: 16,
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#dddee3",
  },
  web_container: {
    backgroundColor: "#fff",
  },
});

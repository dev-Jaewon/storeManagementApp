import { View, StyleSheet } from "react-native";
import { FilterButton } from "../search/FilterButton";

export const ProductFilter = () => {
  return (
    <View style={styles.container}>
      <FilterButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#007AFF",
    backgroundColor: "#007AFF",
  },
});

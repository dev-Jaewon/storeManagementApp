import { View, ActivityIndicator, StyleSheet } from "react-native";

export const CategoryLoading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="small" color="#007AFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
});

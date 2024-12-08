import { View, StyleSheet } from "react-native";
import { CommText } from "./CommText";

export const WillNotMobile = () => {
  return (
    <View style={styles.mobileContainer}>
      <CommText>모바일에서는 표시할 수 없습니다.</CommText>
    </View>
  );
};

const styles = StyleSheet.create({
  mobileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { View, StyleSheet } from "react-native";
import { Icons } from "./Icons";
import { CommText } from "./CommText";

export const ErrorPage = () => {
  return (
    <View style={styles.container}>
      <Icons.DangerTriangle />
      <CommText style={styles.text}>에러가 발생했습니다.</CommText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#888",
  },
});

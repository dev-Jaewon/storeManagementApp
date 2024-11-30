import { View, StyleSheet } from "react-native";
import { Icons } from "./Icons";
import { CommText } from "./CommText";

export const NoSearchData = () => {
  return (
    <View style={styles.container}>
      <Icons.Document />
      <CommText style={styles.text}>검색된 결과가 없습니다.</CommText>
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

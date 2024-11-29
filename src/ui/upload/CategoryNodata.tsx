import { CommText } from "../common/CommText";
import { StyleSheet } from "react-native";

export const CategoryNodata = () => {
  return (
    <CommText style={styles.noResults}>검색된 카테고리가 없습니다.</CommText>
  );
};

const styles = StyleSheet.create({
  noResults: {
    color: "#FF6B6B",
    textAlign: "center",
    marginTop: 12,
    fontSize: 14,
  },
});

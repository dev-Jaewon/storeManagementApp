import { View, StyleSheet } from "react-native";
import { ReservationSelectAll } from "./ReservationSelectAll";
import { CommText } from "../common/CommText";

export const ReservationHeader = () => {
  return (
    <View style={styles.headerRow}>
      <View style={styles.headerCell}>
        <ReservationSelectAll />
      </View>
      <View style={styles.headerCell}>
        <CommText>이미지</CommText>
      </View>
      <View style={[styles.headerCell, styles.titleCell]}>
        <CommText>상품명</CommText>
      </View>
      <View style={styles.headerCell}>
        <CommText>카테고리</CommText>
      </View>
      <View style={styles.headerCell}>
        <CommText>가격</CommText>
      </View>
      <View style={styles.headerCell}>
        <CommText>마진(%)</CommText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 10,
  },
  headerCell: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  titleCell: {
    flex: 2,
  },
});

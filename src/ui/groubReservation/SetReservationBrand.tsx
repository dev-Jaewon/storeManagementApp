import { StyleSheet, TextInput, View } from "react-native";
import { CommText } from "../common/CommText";

export const SetReservationBrand = () => {
  return (
    <View style={styles.container}>
      <CommText>브랜드</CommText>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 5,
  },
});
``;

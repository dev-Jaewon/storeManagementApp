import { View, StyleSheet, TextInput } from "react-native";
import { useRecoilState } from "recoil";
import { groubReservation } from "@/store/GroubReservation";
import { CommText } from "../common/CommText";

export const SetReservationSale = () => {
  const [value, setValue] = useRecoilState(groubReservation);

  return (
    <View style={styles.container}>
      <CommText>할인</CommText>
      <TextInput
        style={styles.input}
        defaultValue={value.common.sale.toString()}
        onChangeText={(text) =>
          setValue((prev) => ({
            ...prev,
            common: { ...prev.common, sale: Number(text) },
          }))
        }
      />
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

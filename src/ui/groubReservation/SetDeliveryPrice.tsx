import { useRecoilState } from "recoil";
import { TextInput, StyleSheet } from "react-native";

import { View } from "react-native";
import { CommText } from "../common/CommText";
import { groubReservation } from "@/store/GroubReservation";

export const SetDeliveryPrice = () => {
  const [value, setValue] = useRecoilState(groubReservation);

  return (
    <View style={styles.container}>
      <CommText>배송비</CommText>
      <TextInput
        style={styles.input}
        defaultValue={value.common.deliveryPrice.toString()}
        onChangeText={(text) =>
          setValue((prev) => ({
            ...prev,
            common: { ...prev.common, delivery_price: Number(text) },
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

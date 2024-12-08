import { View, StyleSheet, TextInput } from "react-native";
import { CommText } from "../common/CommText";
import { useRecoilState } from "recoil";
import { groubReservation } from "@/store/GroubReservation";

export const SetReservationCountry = () => {
  const [value, setValue] = useRecoilState(groubReservation);

  return (
    <View style={styles.container}>
      <CommText>통화</CommText>
      <TextInput
        style={styles.input}
        defaultValue={value.common.country}
        onChangeText={(text) =>
          setValue((prev) => ({
            ...prev,
            common: { ...prev.common, country: text },
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
    paddingHorizontal: 10,
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

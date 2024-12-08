import { TextInput } from "react-native";
import { useRecoilState } from "recoil";
import { itemState } from "@/store/GroubReservation";
import { StyleSheet } from "react-native";

type ReservationMarginProps = {
  index: number;
};

export const ReservationMargin = ({ index }: ReservationMarginProps) => {
  const [value, setValue] = useRecoilState(itemState(index));

  const handleChangeMargin = (margin: string) => {
    setValue((currVal) => ({
      ...currVal,
      margin: Number(margin),
    }));
  };

  return (
    <TextInput
      onChangeText={handleChangeMargin}
      defaultValue={value?.margin?.toString()}
      keyboardType="numeric"
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
  },
});

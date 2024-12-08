import { itemState } from "@/store/GroubReservation";
import { TextInput, StyleSheet } from "react-native";
import { useRecoilState } from "recoil";

type ReservationPirceProps = {
  index: number;
};

export const ReservationPirce = ({ index }: ReservationPirceProps) => {
  const [value, setValue] = useRecoilState(itemState(index));

  const handleChangePrice = (price: string) => {
    setValue((currVal) => ({
      ...currVal,
      price: Number(price),
    }));
  };

  return (
    <TextInput
      style={styles.input}
      onChangeText={handleChangePrice}
      defaultValue={value?.price?.toString()}
      keyboardType="numeric"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
  },
});

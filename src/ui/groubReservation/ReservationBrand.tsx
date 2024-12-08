import { itemState } from "@/store/GroubReservation";
import { TextInput, StyleSheet } from "react-native";
import { useRecoilState } from "recoil";

type ReservationBrandProps = {
  index: number;
};

export const ReservationBrand = ({ index }: ReservationBrandProps) => {
  const [value, setValue] = useRecoilState(itemState(index));

  const handleChangeBrand = (brand: string) => {
    setValue((currVal) => ({
      ...currVal,
      brand,
    }));
  };

  return (
    <TextInput
      onChangeText={handleChangeBrand}
      style={styles.input}
      defaultValue={value?.brand}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
  },
});

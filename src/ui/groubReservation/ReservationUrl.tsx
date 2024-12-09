import { TextInput } from "react-native";
import { useRecoilState } from "recoil";
import { itemState } from "@/store/GroubReservation";
import { StyleSheet } from "react-native";

type ReservationUrlProps = {
  index: number;
};

export const ReservationUrl = ({ index }: ReservationUrlProps) => {
  const [value, setValue] = useRecoilState(itemState(index));

  const handleChangeUrl = (url: string) => {
    setValue((currVal) => ({
      ...currVal,
      url: url,
    }));
  };

  return (
    <TextInput
      onChangeText={handleChangeUrl}
      defaultValue={value?.url}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
  },
});

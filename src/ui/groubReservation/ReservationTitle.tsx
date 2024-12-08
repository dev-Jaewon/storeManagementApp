import { itemState } from "@/store/GroubReservation";
import { useRecoilState } from "recoil";
import { TextInput, StyleSheet } from "react-native";

type ReservationTitleProps = {
  index: number;
};

export const ReservationTitle = ({ index }: ReservationTitleProps) => {
  const [value, setValue] = useRecoilState(itemState(index));

  const handleChangeTitle = (title: string) => {
    setValue((currVal) => ({
      ...currVal,
      title,
    }));
  };

  return (
    <TextInput
      onChangeText={handleChangeTitle}
      defaultValue={value?.title}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
    flex: 1,
    width: "100%",
  },
});

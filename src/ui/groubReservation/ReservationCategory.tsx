import { itemState } from "@/store/GroubReservation";
import { StyleSheet, View } from "react-native";
import { useRecoilState } from "recoil";
import { CommText } from "../common/CommText";

type ReservationCategoryProps = {
  index: number;
};

export const ReservationCategory = ({ index }: ReservationCategoryProps) => {
  const [value] = useRecoilState(itemState(index));

  return (
    <View style={styles.container}>
      <CommText>{value?.category?.text}</CommText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    textAlign: "center",
  },
});

import { groubReservation } from "@/store/GroubReservation";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useRecoilState } from "recoil";

export const ReservationSelectAll = () => {
  const [value, setValue] = useRecoilState(groubReservation);

  //   if (!value?.isSelected && typeof value?.isSelected !== "boolean") return null;

  const isSelected = value.list.every((item) => item.isSelected);

  const handleToggleSelectAll = () => {
    setValue((currVal) => ({
      ...currVal,
      list: currVal.list.map((item) => ({ ...item, isSelected: !isSelected })),
    }));
  };

  return (
    <TouchableOpacity
      style={[styles.checkbox, isSelected && styles.checked]}
      onPress={handleToggleSelectAll}
    >
      {isSelected && <Ionicons name="checkmark" size={20} color="#fff" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: "#007AFF",
  },
});

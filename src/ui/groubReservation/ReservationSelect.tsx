import { itemState } from "@/store/GroubReservation";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useRecoilState } from "recoil";
import { Ionicons } from "@expo/vector-icons";

type ReservationSelectProps = {
  index: number;
};

export const ReservationSelect = ({ index }: ReservationSelectProps) => {
  const [value, setValue] = useRecoilState(itemState(index));

  const handleToggleSelect = () => {
    setValue((currVal) => ({
      ...currVal,
      isSelected: !currVal.isSelected,
    }));
  };

  if (!value?.isSelected && typeof value?.isSelected !== "boolean") return null;

  return (
    <TouchableOpacity
      style={[styles.checkbox, value.isSelected && styles.checked]}
      onPress={handleToggleSelect}
    >
      {value?.isSelected && (
        <Ionicons name="checkmark" size={20} color="#fff" />
      )}
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
    borderColor: "#007AFF",
  },
});

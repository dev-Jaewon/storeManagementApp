import { itemState } from "@/store/GroubReservation";
import { TouchableOpacity, StyleSheet, View } from "react-native";
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
    <TouchableOpacity onPress={handleToggleSelect} style={styles.container}>
      <View style={[styles.checkbox, value.isSelected && styles.checked]}>
        {value?.isSelected && (
          <Ionicons name="checkmark" size={20} color="#fff" />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
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

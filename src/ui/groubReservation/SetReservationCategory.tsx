import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useCategorySelector } from "./modal/useCategorySeletor";
import { CommText } from "../common/CommText";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { category as categoryState } from "@/store/category";
import { groubReservation } from "@/store/GroubReservation";

export const SetReservationCategory = () => {
  const categorySelectorModal = useCategorySelector();

  const category = useRecoilValue(categoryState);
  const setReservation = useSetRecoilState(groubReservation);

  const handleSelectCategory = async () => {
    await categorySelectorModal.show();
  };

  const handleApplyCategory = () => {
    setReservation((prev) => ({
      ...prev,
      list: prev.list.map((item) => ({
        ...item,
        category: item.isSelected ? category : item.category,
      })),
    }));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.openButton]}
        onPress={handleSelectCategory}
      >
        <TextInput
          placeholder="카테고리 검색"
          style={styles.input}
          value={category.text}
          editable={false}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleApplyCategory}>
        <CommText style={[styles.buttonText, styles.button]}>적용</CommText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    padding: 8,
    width: "100%",
  },
  button: {
    padding: 8,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  buttonText: {
    backgroundColor: "#007AFF",
    color: "white",
  },
  openButton: {
    flex: 1,
  },
});

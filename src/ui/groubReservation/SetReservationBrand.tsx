import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useSetRecoilState } from "recoil";
import { groubReservation } from "@/store/GroubReservation";
import { CommText } from "../common/CommText";

export const SetReservationBrand = () => {
  const [brandKeyword, setBrandKeyword] = useState("");
  const setReservation = useSetRecoilState(groubReservation);

  const handleApplyBrand = () => {
    setReservation((prev) => ({
      list: prev.list.map((item) => ({
        ...item,
        brand: item.isSelected ? brandKeyword : item.brand,
      })),
    }));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, styles.button]}
        value={brandKeyword}
        onChangeText={setBrandKeyword}
        placeholder="브랜드 입력"
        placeholderTextColor="#bfbcbc"
      />
      <TouchableOpacity onPress={handleApplyBrand}>
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
  },
  buttonText: {
    backgroundColor: "#007AFF",
    color: "white",
  },
});

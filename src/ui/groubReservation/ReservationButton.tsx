import { Button, StyleSheet, View } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { uploadGroubReservation } from "@/src/util/api";
import { groubReservation } from "@/store/GroubReservation";
import { useRecoilValue } from "recoil";

export const ReservationButton = () => {
  const groubReservationValue = useRecoilValue(groubReservation);

  const mutation = useMutation({
    mutationFn: uploadGroubReservation,
  });

  const handleUpload = () => {
    const selectedList = groubReservationValue.list.filter(
      (item) => item.isSelected
    );

    for (let i = 0; i < groubReservationValue.list.length; i++) {
      const item = groubReservationValue.list[i];
      if (item.image_data.length === 0 && item.isSelected) {
        alert(`${i + 1} 상품의 이미지를 선택해주세요.`);
        return;
      }
    }

    mutation.mutate({
      ...groubReservationValue,
      list: selectedList,
    });
  };

  return (
    <View style={styles.button}>
      <Button title="업로드" onPress={handleUpload} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: "100%",
    borderRadius: 10,
  },
});

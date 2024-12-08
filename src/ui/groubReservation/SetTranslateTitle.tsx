import { Button, StyleSheet, View } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { translateTitle } from "@/src/util/api";
import { groubReservation } from "@/store/GroubReservation";
import { useRecoilState } from "recoil";

export const SetTranslateTitle = () => {
  //   const groubReservationValue = useRecoilValue(groubReservation);
  const [groubReservationState, setGroubReservationState] =
    useRecoilState(groubReservation);
  const mutation = useMutation({
    mutationFn: translateTitle,
    onSuccess: (res) => {
      const setTitle = groubReservationState.list.map((item, index) => ({
        ...item,
        title: res[index].title,
      }));

      setGroubReservationState({ ...groubReservationState, list: setTitle });
    },
  });

  const handleTranslate = () => {
    const selectedList = groubReservationState.list.map((item) => ({
      title: item.title,
      url: item.url,
      isSelected: item.isSelected,
    }));

    mutation.mutate({
      list: selectedList,
    });
  };

  return (
    <View style={styles.button}>
      <Button title="번역" onPress={handleTranslate} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});

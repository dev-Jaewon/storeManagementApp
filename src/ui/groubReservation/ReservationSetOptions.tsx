import { View, StyleSheet } from "react-native";

import { SetReservationCategory } from "./SetReservationCategory";
import { SetReservationBrand } from "./SetReservationBrand";
export const ReservationSetOptions = () => {
  return (
    <View style={styles.container}>
      <SetReservationCategory />
      <SetReservationBrand />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
  },
});

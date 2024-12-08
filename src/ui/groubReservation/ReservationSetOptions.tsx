import { View, StyleSheet } from "react-native";

import { SetReservationCategory } from "./SetReservationCategory";
import { SetReservationCountry } from "./SetReservationCountry";
import { SetReservationWeight } from "./SetReservationWeight";
import { SetReservationBrand } from "./SetReservationBrand";

export const ReservationSetOptions = () => {
  return (
    <View style={styles.container}>
      <SetReservationCategory />
      <View style={styles.row}>
        <SetReservationBrand />
        <SetReservationCountry />
        <SetReservationWeight />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
});

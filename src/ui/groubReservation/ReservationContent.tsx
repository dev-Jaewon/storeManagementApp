import { View, StyleSheet, TouchableOpacity } from "react-native";
import { GroubReservationItem } from "../../util/typeApi/GroubReservation";
import { ReservationPirce } from "./ReservationPirce";
import { ReservationSelect } from "./ReservationSelect";
import { ReservationThumbnail } from "./ReservationThumbnail";
import { ReservationTitle } from "./ReservationTitle";
import { ReservationCategory } from "./ReservationCategory";
import { ReservationMargin } from "./ReservationMargin";
import { useImageSelector } from "./modal/useImageSelector";
import { ReservationUrl } from "./ReservationUrl";

type ReservationContentProps = {
  list: GroubReservationItem[];
};

export const ReservationContent = ({ list }: ReservationContentProps) => {
  const imageSelector = useImageSelector();

  return (
    <View>
      {list.map((item, index) => (
        <View key={index} style={styles.row}>
          <View style={styles.cell}>
            <ReservationSelect index={index} />
          </View>
          <View style={[styles.cell]}>
            <ReservationUrl index={index} />
          </View>
          <TouchableOpacity
            style={[styles.cell]}
            onPress={() =>
              imageSelector.show({
                list: item.image_data,
                index,
              })
            }
          >
            <ReservationThumbnail index={index} />
          </TouchableOpacity>
          <View style={[styles.cell, styles.titleCell]}>
            <ReservationTitle index={index} />
          </View>
          <View style={styles.cell}>
            <ReservationCategory index={index} />
          </View>
          <View style={styles.cell}>
            <ReservationPirce index={index} />
          </View>
          <View style={styles.cell}>
            <ReservationMargin index={index} />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 10,
  },
  cell: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#ddd",
  },
  titleCell: {
    flex: 2,
  },
});

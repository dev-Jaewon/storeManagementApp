import { itemState } from "@/store/GroubReservation";
import { useRecoilValue } from "recoil";
import { Image, StyleSheet, View } from "react-native";

type ReservationThumbnailProps = {
  index: number;
};

export const ReservationThumbnail = ({ index }: ReservationThumbnailProps) => {
  const value = useRecoilValue(itemState(index));

  return (
    <View style={styles.thumbnail}>
      <Image
        source={{ uri: value?.thumbnail }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    width: 100,
    height: 100,
  },
  image: {
    flex: 1,
  },
});

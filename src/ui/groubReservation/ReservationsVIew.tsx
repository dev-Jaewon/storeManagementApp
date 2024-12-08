import { useQuery } from "@tanstack/react-query";
import { getGroubReservation } from "@/src/util/api";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useEffect } from "react";
import { groubReservation } from "@/store/GroubReservation";
import { useSetRecoilState } from "recoil";
import { ReservationHeader } from "./ReservationHeader";
import { ReservationContent } from "./ReservationContent";
import { ReservationSetOptions } from "./ReservationSetOptions";

export const ReservationsView = () => {
  const setValue = useSetRecoilState(groubReservation);

  const { data, isLoading } = useQuery({
    queryKey: ["groub-reservation"],
    queryFn: () =>
      getGroubReservation(
        "https://item.rakuten.co.jp/majimaya/c/0000000796/?s=1&i=1#risFil"
      ),
  });

  useEffect(() => {
    if (data) {
      const list = data.list.map((item) => ({
        ...item,
        isSelected: false,
        category: {
          text: "",
          code: "",
        },
        margin: 20,
        image_data: [],
      }));

      setValue({ list });
    }
  }, [data]);

  if (isLoading || !data) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <ReservationSetOptions />
      <ReservationHeader />
      <ScrollView horizontal={false}>
        <ReservationContent list={data.list} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
  },
});

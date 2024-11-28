import { getSearchProductDetail } from "@/src/util/api";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import { View, StyleSheet, ScrollView } from "react-native"
import { CommText } from "../common/CommText";
import { ImageList } from "./ImageList";

export const ContentView = () => {
  const params = useLocalSearchParams<{ "upload-id": string }>();

  const searchQuery = useQuery({
    queryKey: ['search'],
    queryFn: () => getSearchProductDetail(params["upload-id"])
  });

  if (searchQuery.isFetching) {
    return <View style={styles.container}>
      <CommText>데이터를 가져오는 중입니다.</CommText>
    </View>
  }

  return <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ImageList imageData={searchQuery.data?.image_data} />
    </ScrollView>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    flex: 1
  }
})
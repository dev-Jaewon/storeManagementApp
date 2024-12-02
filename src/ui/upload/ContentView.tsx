import { useLocalSearchParams } from "expo-router";
import { View, StyleSheet, ScrollView } from "react-native";
import { CommText } from "../common/CommText";
import { ImageList } from "./ImageList";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { uploadProductInfo } from "@/store/Upload";
import { useSearchProductDetail } from "@/hooks/useSearchProductDetail";

export const ContentView = () => {
  const params = useLocalSearchParams<{ "upload-id": string }>();
  const setuploadInfo = useSetRecoilState(uploadProductInfo);

  const searchQuery = useSearchProductDetail(params["upload-id"]);

  useEffect(() => {
    if (searchQuery.data) {
      const id = params["upload-id"];
      if (id)
        setuploadInfo((prev) => ({
          ...prev,
          id,
          originProductUrl: searchQuery.data.url,
        }));
    }
  }, [searchQuery.data]);

  if (searchQuery.isFetching) {
    return (
      <View style={styles.container}>
        <CommText>데이터를 가져오는 중입니다.</CommText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageList imageData={searchQuery.data?.image_data} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
});

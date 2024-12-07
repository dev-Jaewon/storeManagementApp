import { View, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { Icons } from "../common/Icons";
import { CommText } from "../common/CommText";
import { Notification } from "../common/Notification";
import { useRouter } from "expo-router";

export const DetailHeader = () => {
  const router = useRouter();

  const handleBack = () => {
    if (Platform.OS === "web") {
      if (router.canGoBack()) {
        router.back();
      } else {
        router.push("/products");
      }
    } else {
      router.back();
    }
  };

  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={handleBack}>
        <Icons.ArrowLeft_22 />
      </TouchableOpacity>
      <CommText style={styles.text}>상품 상세</CommText>
      <Notification />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 62,
    alignItems: "center",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

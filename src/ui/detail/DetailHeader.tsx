import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Icons } from "../common/Icons";
import { CommText } from "../common/CommText";
import { Notification } from "../common/Notification";
import { useRouter } from "expo-router";

export const DetailHeader = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Icons.ArrowLeft_22 />
      </TouchableOpacity>
      <CommText style={styles.text}>상품 상세</CommText>
      <Notification />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: "center",
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

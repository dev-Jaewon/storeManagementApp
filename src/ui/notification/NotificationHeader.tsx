import { useRouter } from "expo-router";
import { Platform, TouchableOpacity, View, StyleSheet } from "react-native";
import { CommText } from "../common/CommText";
import { Icons } from "../common/Icons";

export const NotificationHeader = () => {
  const router = useRouter();

  const handleBack = () => {
    if (Platform.OS === "web") {
      if (!router.canGoBack()) {
        router.push("/");
      } else {
        router.back();
      }
    } else {
      router.back();
    }
  };

  return (
    <View
      style={[styles.container, Platform.OS === "web" && styles.webContainer]}
    >
      <TouchableOpacity onPress={handleBack}>
        <Icons.ArrowLeft_22 />
      </TouchableOpacity>
      <CommText style={styles.text}>알림</CommText>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 62,
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 15.5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
  webContainer: {
    backgroundColor: "#fff",
  },
});

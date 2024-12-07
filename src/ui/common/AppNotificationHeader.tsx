import { StyleSheet, Platform, TouchableOpacity } from "react-native";
import { CommText } from "./CommText";
import { useRouter } from "expo-router";
import { Notification } from "./Notification";
export const AppNotificationHeader = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={[styles.container, Platform.OS === "web" && styles.web_container]}
      onPress={() => {
        router.push("/notification");
      }}
    >
      <CommText style={styles.text}>StoreManagement</CommText>
      <Notification />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    backgroundColor: "#ffffff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  web_container: {
    backgroundColor: "#ffffff",
  },
});

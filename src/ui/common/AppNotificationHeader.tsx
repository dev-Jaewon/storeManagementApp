import { View, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { CommText } from "./CommText";
import { Icons } from "./Icons";
import { useNotificationApi } from "@/hooks/useNotificationApi";
import { useRouter } from "expo-router";

export const AppNotificationHeader = () => {
  const router = useRouter();
  const notification = useNotificationApi();

  return (
    <TouchableOpacity
      style={[styles.container, Platform.OS === "web" && styles.web_container]}
      onPress={() => {
        router.push("/notification");
      }}
    >
      <CommText style={styles.text}>StoreManagement</CommText>
      <Icons.Notification width={30} height={30} />
      <View style={styles.notificationCount}>
        <CommText style={styles.notificationCountText}>
          {notification.length}
        </CommText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  web_container: {
    backgroundColor: "#fff",
  },
  notificationCount: {
    margin: 8,
    position: "absolute",
    right: 0,
    top: 0,
    borderRadius: 100,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  notificationCountText: {
    color: "#fff",
  },
});

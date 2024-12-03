import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Icons } from "./Icons";
import { useNotificationApi } from "@/hooks/useNotificationApi";
import { CommText } from "./CommText";
import { router } from "expo-router";

export const Notification = () => {
  const notification = useNotificationApi();

  const handleNotification = () => {
    router.push("/notification");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleNotification}>
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
    position: "relative",
  },
  notificationCount: {
    margin: 8,
    position: "absolute",
    right: -15,
    top: -15,
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

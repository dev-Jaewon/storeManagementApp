import { useNotificationApi } from "@/hooks/useNotificationApi";
import { View, StyleSheet } from "react-native";
import { Notification } from "@/src/util/typeApi/Notification";
import { NotificationListItem } from "./NotificationListItem";

export const NotificationView = () => {
  const notification = useNotificationApi();

  return (
    <View style={styles.container}>
      {notification.map((item: Notification) => (
        <NotificationListItem
          key={item.id}
          type={"error"}
          message={item.message}
          createdAt={item.created_at}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

import { View, StyleSheet, Platform } from "react-native";
import { CommText } from "./CommText";
import { Icons } from "./Icons";

export const AppNotificationHeader = () => {
  return (
    <View
      style={[styles.container, Platform.OS === "web" && styles.web_container]}
    >
      <CommText style={styles.text}>StoreManagement</CommText>
      <Icons.Notification width={30} height={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  web_container: {
    backgroundColor: "#fff",
  },
});

import { View, StyleSheet, Platform } from "react-native";
import { CommText } from "../common/CommText";
import { formatDate } from "@/src/util/date";

type NotificationListItemProps = {
  type: string;
  message: string;
  createdAt: string;
};

export const NotificationListItem = ({
  type,
  message,
  createdAt,
}: NotificationListItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.contenxt}>
        <CommText style={styles.notificationFilterType}>{type}</CommText>
        <CommText style={styles.notificationMessage}>{message}</CommText>
        <CommText style={styles.createdAt}>{formatDate(createdAt)}</CommText>
      </View>
      <View style={styles.circleContainer}>
        <View style={styles.circle}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 12,
    padding: 15,
    backgroundColor: "white",
    flexDirection: "row",

    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,

    ...Platform.select({
      web: {
        elevation: 4,
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowColor: "rgba(60, 64, 67, 0.4)",
      },
      android: {
        backgroundColor: "white",
        elevation: 5,
        shadowColor: "rgba(60, 64, 67, 0.6)",
      },
    }),
  },
  notificationFilterType: {
    fontSize: 17,
    fontWeight: "bold",
  },
  notificationMessage: {
    fontSize: 17,
    fontWeight: "bold",
  },
  createdAt: {
    fontSize: 12,
    color: "#999",
  },
  circleContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  contenxt: {
    paddingLeft: 10,
    gap: 10,
    flex: 1,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: "red",
  },
});

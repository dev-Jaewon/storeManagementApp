import { View, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { CommText } from "../common/CommText";
import { notificationFilterList } from "@/store/Notification";
import { useRecoilState } from "recoil";
import { notificationFilter } from "@/store/Notification";

export const NotificationFilter = () => {
  const [notiFilter, setNotiFilter] = useRecoilState(notificationFilter);

  const handleFilterChange = (filter: string) => {
    setNotiFilter((prev) => ({ ...prev, filter }));
  };

  return (
    <View style={styles.container}>
      {notificationFilterList.map((item) => (
        <TouchableOpacity key={item} onPress={() => handleFilterChange(item)}>
          <CommText
            style={[
              styles.text,
              { color: notiFilter.filter === item ? "#000" : "#999" },
            ]}
          >
            {item}
          </CommText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    backgroundColor: "#fff",
    borderColor: "#ccc",

    ...Platform.select({
      web: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
      },
      ios: {
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
      },
      android: {
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
      },
    }),
  },
  text: {
    padding: 16,
    fontWeight: "bold",

    ...Platform.select({
      web: {
        fontSize: 16,
      },
      android: {
        fontSize: 14,
      },
      ios: {
        fontSize: 14,
      },
    }),
  },
});

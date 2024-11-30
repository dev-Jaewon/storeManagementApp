import { View, StyleSheet } from "react-native";
import { SearchListView } from "@/src/ui/search/SearchListView";
import { AppNotificationHeader } from "@/src/ui/common/AppNotificationHeader";

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <AppNotificationHeader />
      <SearchListView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

import { View, StyleSheet } from "react-native";
import { SearchListView } from "@/src/ui/search/SearchListView";
import { AppNotificationHeader } from "@/src/ui/common/AppNotificationHeader";
import { Layout } from "@/src/ui/common/Layout";

export default function SearchScreen() {
  return (
    <Layout>
      <View style={styles.container}>
        <AppNotificationHeader />
        <SearchListView />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

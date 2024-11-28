import { View, StyleSheet } from "react-native";
import { SearchListView } from "@/src/ui/search/SearchListView";

export default function SearchScreen() {
  return <View style={styles.container}>
    <SearchListView />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

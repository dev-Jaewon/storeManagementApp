import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { SearchListItem } from "./SearchListItem";
import { ResponseSearch } from "@/src/util/typeApi/SearchType";

type SearchListProps = {
  list: ResponseSearch[];
  isLoading: boolean;
};

export const SearchList = ({ list, isLoading }: SearchListProps) => {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={list}
          renderItem={({ item }) => <SearchListItem data={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 16 }}
          scrollEnabled={true}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    height: "100%",
    backgroundColor: "#ebebeb",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 16,
  },
});

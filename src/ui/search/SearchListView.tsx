import { View, StyleSheet } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { SearchList } from "./SearchList";
import { getGroupSearchList, getSearchList } from "@/src/util/api";
import { Searchbar } from "./Searchbar";
import { FilterButton } from "./FilterButton";
import { TabHeader } from "./TabHeader";
import { useState } from "react";
import { GroubList } from "./GroubList";

export const SearchListView = () => {
  const [activeTab, setActiveTab] = useState<"single" | "group">("single");

  const searchQuery = useQuery({
    queryKey: ["searchList"],
    queryFn: getSearchList,
    enabled: activeTab === "single",
  });

  const groupSearchQuery = useQuery({
    queryKey: ["groupSearchList"],
    queryFn: getGroupSearchList,
    enabled: activeTab === "group",
  });

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar />
        <FilterButton />
      </View>
      <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "single" ? (
        <SearchList
          list={searchQuery.data ?? []}
          isLoading={searchQuery.isLoading}
        />
      ) : (
        <GroubList
          list={groupSearchQuery.data || []}
          isLoading={groupSearchQuery.isLoading}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 16,
    paddingHorizontal: 16,
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#dddee3",
  },
});

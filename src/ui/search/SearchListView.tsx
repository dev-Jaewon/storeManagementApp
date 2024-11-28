import { View, StyleSheet } from "react-native"
import { useQuery } from "@tanstack/react-query"
import { SearchList } from "./SearchList"
import { getSearchList } from "@/src/util/api"
import { Searchbar } from "./Searchbar"
import { FilterButton } from "./FilterButton"

export const SearchListView = () => {
    const searchQuery = useQuery({
        queryKey: ['searchList'],
        queryFn: getSearchList
    })

    return <View style={styles.container}>
        <View style={styles.searchContainer}>
            <Searchbar />
            <FilterButton />
        </View>
        <SearchList list={searchQuery.data ?? []} isLoading={searchQuery.isLoading} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        gap: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#dddee3'
    }
})
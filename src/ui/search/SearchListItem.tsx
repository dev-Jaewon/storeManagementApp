import { View, StyleSheet, Image, TouchableOpacity } from "react-native"
import { CommText } from "@/src/ui/common/CommText"
import { ResponseSearch } from "@/src/util/typeApi/SearchType"
import { useRouter } from "expo-router"

type SearchListItemProps = {
  data: ResponseSearch
}

export const SearchListItem = ({ data }: SearchListItemProps) => {
  const router = useRouter();

  return <TouchableOpacity style={styles.container} onPress={() =>
    router.push(`/product/upload/${data.id}`)
  }>
    <Image source={{ uri: data.image_data[0].url }} style={styles.image} />
    <View style={styles.textContainer}>
      <CommText numberOfLines={1} style={styles.brand}>{data.brand}</CommText>
      <CommText numberOfLines={1} style={styles.name}>{data.title}</CommText>
    </View>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    aspectRatio: 3 / 4,
    borderRadius: 16,
    overflow: 'hidden',
    padding: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    height: '50%',
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    padding: 8,
    gap: 4,
    justifyContent: 'flex-end',
  },
  brand: {
    fontSize: 16,
    color: 'blue',
  },
  name: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  textWrapper: {
    flexDirection: 'row',
    gap: 4,
  }
})

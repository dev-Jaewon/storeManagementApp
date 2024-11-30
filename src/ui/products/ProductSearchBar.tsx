import { TouchableOpacity, StyleSheet } from "react-native";
import { Icons } from "../common/Icons";
import { useRouter } from "expo-router";

export const ProductSearchBar = () => {
  const router = useRouter();

  const handleOpen = () => {
    router.push("/product/search");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleOpen}>
      <Icons.Search />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#dddee3",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 19,
    elevation: 19,
  },
});

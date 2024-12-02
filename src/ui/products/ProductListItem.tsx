import {
  View,
  StyleSheet,
  Linking,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Product } from "@/src/util/typeApi/ProductsType";
import { CommText } from "../common/CommText";
import { Icons } from "../common/Icons";
import { useRouter } from "expo-router";

type ProductListItemProps = {
  product: Product;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.image }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.info}>
          <CommText style={styles.brand}>{product.brand}</CommText>
          <CommText style={styles.title}>{product.title}</CommText>
        </View>
        <View style={styles.arrowContainer}>
          <Icons.ArrowRight_22 />
        </View>
      </View>
      <View style={styles.linkContainer}>
        <TouchableOpacity
          style={styles.link}
          onPress={() => Linking.openURL(product.link_product)}
        >
          <Icons.Card />
          <CommText style={styles.link}>스마트스토어</CommText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.link}
          onPress={() => Linking.openURL(product.link_store)}
        >
          <Icons.Buy />
          <CommText style={styles.link}>구매대행</CommText>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 2.4,
    borderRadius: 12,
    padding: 15,
    backgroundColor: "white",

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
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 12,
    maxWidth: 150,
    flex: 1,
  },
  info: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
    paddingLeft: 10,

    ...Platform.select({
      web: {
        paddingLeft: 15,
      },
    }),
  },
  image: {
    width: 80,
    height: 80,

    ...Platform.select({
      web: {
        height: "100%",
        width: "100%",
      },
    }),
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
  },
  linkContainer: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.1)",
  },
  link: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    color: "black",
    opacity: 0.7,
  },
  brand: {
    fontSize: 15,
    color: "blue",
    fontWeight: "bold",

    ...Platform.select({
      web: {
        fontSize: 17,
      },
    }),
  },
  title: {
    fontSize: 13,
    color: "black",
    fontWeight: "bold",

    ...Platform.select({
      web: {
        fontSize: 15,
      },
    }),
  },
  arrowContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    paddingHorizontal: 20,
  },
});

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import { Icons } from "../common/Icons";
import { CommText } from "../common/CommText";

type BottomViewProps = {
  link_product: string;
  link_store: string;
};

export const BottomView = ({ link_product, link_store }: BottomViewProps) => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        style={styles.link}
        onPress={() => Linking.openURL(link_product)}
      >
        <Icons.Card />
        <CommText style={styles.link}>스마트스토어</CommText>
      </TouchableOpacity>
      <CommText style={styles.divider}>|</CommText>
      <TouchableOpacity
        style={styles.link}
        onPress={() => Linking.openURL(link_store)}
      >
        <Icons.Buy />
        <CommText style={styles.link}>구매대행</CommText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    alignItems: "center",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    justifyContent: "space-around",
    flex: 1,
  },
  link: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,

    ...Platform.select({
      web: {
        fontSize: 14,
        fontWeight: "bold",
        opacity: 0.7,
      },
      android: {
        fontSize: 12,
        fontWeight: "bold",
      },
      ios: {
        fontSize: 12,
        fontWeight: "bold",
      },
    }),
  },
  divider: {
    fontSize: 14,
    fontWeight: "bold",
    opacity: 0.7,
  },
});

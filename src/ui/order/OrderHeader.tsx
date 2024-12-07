import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Icons } from "../common/Icons";
import { CommText } from "../common/CommText";
import { Notification } from "../common/Notification";
import { useRouter } from "expo-router";

type OrderHeaderProps = {
  text: string;
};

export const OrderHeader = ({ text }: OrderHeaderProps) => {
  const router = useRouter();

  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={() => router.back()}>
        <Icons.ArrowLeft_22 />
      </TouchableOpacity>
      <CommText style={styles.text}>{text}</CommText>
      <Notification />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 62,
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 15.5,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

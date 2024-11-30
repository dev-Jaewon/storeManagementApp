import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
} from "react-native";
import { CommText } from "../common/CommText";
import { Icons } from "../common/Icons";
import { useRouter } from "expo-router";
import { UploadButton } from "./UploadButton";

type UploadHeaderProps = {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const UploadHeader = ({
  title,
  containerStyle,
  textStyle,
}: UploadHeaderProps) => {
  const router = useRouter();

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={() => router.back()} style={styles.icon}>
        <Icons.ArrowLeft_22 />
      </TouchableOpacity>
      <View style={styles.titleWrapper}>
        <CommText style={textStyle}>{title}</CommText>
      </View>
      <UploadButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    zIndex: 1000,
  },
});
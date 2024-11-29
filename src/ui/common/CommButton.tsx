import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { CommText } from "./CommText";

type CommButtonProps = {
  text?: string;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
};

export const CommButton = ({
  text,
  onPress,
  containerStyle,
  textStyle,
  children,
}: CommButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}
    >
      {text ? (
        <CommText style={[styles.text, textStyle]}>{text}</CommText>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: "#007AFF",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

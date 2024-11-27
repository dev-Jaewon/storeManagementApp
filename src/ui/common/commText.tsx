import { StyleProp, Text, TextStyle } from "react-native";

export type CommTextProps = {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

export const CommText = ({ children, style }: CommTextProps) => {
  return (
    <Text style={[{ fontFamily: "Lora-Regular" }, style]}>{children}</Text>
  );
};

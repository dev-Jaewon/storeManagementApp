import { Text, TextProps } from "react-native";

export type CommTextProps = {
  children: React.ReactNode;
} & TextProps;

export const CommText = ({ children, style, ...props }: CommTextProps) => {
  return (
    <Text style={[{ fontFamily: "Lora-Regular" }, style]} {...props}>{children}</Text>
  );
};

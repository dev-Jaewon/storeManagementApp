import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Icons } from "./Icons";
import { useState } from "react";

type SearchIconInputProps = {
  placeholder?: string;
  onChangeText?: (text: string) => void;
};

export const SearchIconInput = ({
  placeholder,
  onChangeText,
}: SearchIconInputProps) => {
  const [text, setText] = useState("");

  const handleClear = () => {
    setText("");
  };

  const handleChangeText = (text: string) => {
    setText(text);
    onChangeText?.(text);
  };

  return (
    <View style={styles.container}>
      <Icons.Search />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#767676"
        value={text}
        onChangeText={handleChangeText}
      />
      {text.length > 0 && (
        <TouchableOpacity onPress={handleClear} style={styles.clear}>
          <Icons.CloseSquareReverse width={20} height={20} color="#767676" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  input: {
    flex: 1,
    fontSize: 17,
  },
  clear: {
    paddingRight: 10,
  },
});

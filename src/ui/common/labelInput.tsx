import { View, StyleSheet, TextInput, StyleProp, TextStyle } from "react-native"
import { CommText } from "./CommText"

type LabelInputProps = {
  label?: string
  placeholder?: string
  inputStyle?: StyleProp<TextStyle>
  labelStyle?: StyleProp<TextStyle>
  onChangeText?: (text: string) => void
  value?: string
}

export const LabelInput = ({ label, inputStyle, placeholder, labelStyle, onChangeText, value }: LabelInputProps) => {
  return <View style={styles.container}>
    <CommText style={[styles.label, labelStyle]}>{label}</CommText>
    <TextInput style={[styles.input, inputStyle]} placeholder={placeholder} placeholderTextColor="#999" onChangeText={onChangeText} value={value} />
  </View>
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    width: '100%'
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#454545'
  },
  input: {
    fontSize: 15,
    fontWeight: '400',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    padding: 20,
    width: '100%'
  }
})
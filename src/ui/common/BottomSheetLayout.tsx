import { View, StyleSheet } from "react-native";

export const BottomSheetLayout = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.container}>
    <View style={styles.topUnderLine} />
    <View>{children}</View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  topUnderLine: {
    height: 2,
    backgroundColor: 'gray',
    width: 50,
    borderRadius: 10,
    marginVertical: 10
  }
})
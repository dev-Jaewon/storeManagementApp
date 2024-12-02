import { View, StyleSheet, Platform } from "react-native";

export const BottomSheetLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <View
      style={[styles.container, Platform.OS === "web" && styles.web_container]}
    >
      <View style={styles.topUnderLine} />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    width: "100%",
  },
  topUnderLine: {
    height: 2,
    backgroundColor: "gray",
    width: 50,
    borderRadius: 10,
    marginVertical: 10,
  },
  web_container: {
    width: 600,
    alignSelf: "center",
  },
});

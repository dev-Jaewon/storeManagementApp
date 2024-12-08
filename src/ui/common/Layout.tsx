import { Stack } from "expo-router";
import { StyleSheet, StatusBar, SafeAreaView, Platform } from "react-native";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" />
      <Stack.Screen options={{ headerShown: false }} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    ...Platform.select({
      web: {
        maxWidth: 600,
        alignSelf: "center",
        width: "100%",
        backgroundColor: "#ebebeb",
        borderWidth: 1,
        borderColor: "#dddee3",
      },
    }),
  },
});

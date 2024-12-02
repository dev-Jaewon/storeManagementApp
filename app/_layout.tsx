import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "react-native-use-modal";
import { View, Platform, StyleSheet } from "react-native";

import { useColorScheme } from "@/hooks/useColorScheme";
import { RecoilRoot } from "recoil";
import { useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <View
              style={[
                styles.container,
                Platform.OS === "web" && styles.web_container,
                (Platform.OS === "android" || Platform.OS === "ios") &&
                  styles.mobileContainer,
              ]}
            >
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
              </Stack>
              <StatusBar style="auto" />
            </View>
          </ThemeProvider>
        </ModalProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  web_container: {
    maxWidth: 600,
    alignSelf: "center",
    width: "100%",
    backgroundColor: "#ebebeb",
    borderWidth: 1,
    borderColor: "#dddee3",
  },
  mobileContainer: {
    backgroundColor: "#fff",
  },
});

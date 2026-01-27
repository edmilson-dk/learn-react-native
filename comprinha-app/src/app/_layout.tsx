import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import "react-native-reanimated";

// @ts-ignore
import "@/styles/global.css";

import { ThemeProvider } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NAV_THEME } from "../lib/theme";

export { ErrorBoundary } from "expo-router";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <ThemeProvider value={NAV_THEME["light"]}>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='index' />
          <Stack.Screen name='signup' />
          <Stack.Screen name='signin' />
          <Stack.Screen name='(tabs)' />
        </Stack>
        <PortalHost />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

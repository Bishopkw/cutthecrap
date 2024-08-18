import React, { useEffect } from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "@/hooks/useColorScheme";
import RecipeDetailScreen from "@/screens/RecipeDetail";
import RecipeSelectorScreen from "@/screens/RecipeSelector";
import "react-native-gesture-handler";
import "react-native-reanimated";
import RecipeStepsScreen from "@/screens/RecipeSteps";
import { RootStackParamList } from "@/types";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator<RootStackParamList>();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    PoppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer
      independent
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator
        initialRouteName="RecipeSelector"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="RecipeSelector" component={RecipeSelectorScreen} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
        <Stack.Screen name="RecipeSteps" component={RecipeStepsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

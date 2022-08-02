import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../pages/HomeScreen";
import { Profile } from "../pages/Profile";
import { Album } from "../pages/Album";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Album" component={Album} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

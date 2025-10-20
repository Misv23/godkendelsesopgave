import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import Header from "./components/Header";
import ProgramScreen from "./screens/ProgramScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ContactScreen from "./screens/ContactScreen";
import MapScreen from "./screens/MapScreen";
import HistoryScreen from "./screens/HistoryScreen";
import { palette } from "./styles/GlobalStyles";

const Tab = createBottomTabNavigator();

const navTheme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, background: "#FFFFFF" } };

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <Tab.Navigator
          initialRouteName="Program"
          screenOptions={({ route }) => ({
            header: () => <Header />, // viser Slagelse kommune logo øverst (jeg havde tidligere problemer med margins)
            tabBarActiveTintColor: palette.teal,
            tabBarStyle: { height: 64, paddingBottom: 8, paddingTop: 8 },
            tabBarIcon: ({ color, size }) => {
              if (route.name === "Program") {
                return <Ionicons name="home-outline" size={size} color={color} />;
              }
              if (route.name === "Kort") {
                return <Ionicons name="location-outline" size={size} color={color} />;
              }
              if (route.name === "Kontakt") {
                return <MaterialCommunityIcons name="note-edit-outline" size={size} color={color} />;
              }
              if (route.name === "Historik") {
                return <Ionicons name="time-outline" size={size} color={color} />;
              }
              if (route.name === "Profil") {
                return <Ionicons name="person-circle-outline" size={size} color={color} />;
              }
              return null;
            },
          })}
        >
          <Tab.Screen name="Program" component={ProgramScreen} />
          <Tab.Screen name="Kort" component={MapScreen} />
          <Tab.Screen name="Kontakt" component={ContactScreen} />
          <Tab.Screen name="Historik" component={HistoryScreen} />
          <Tab.Screen name="Profil" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

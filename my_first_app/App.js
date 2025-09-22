import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "./components/Header";
import ProfileScreen from "./screens/ProfileScreen";
import ContactScreen from "./screens/ContactScreen";
import MapScreen from "./screens/MapScreen";
import { palette } from "./styles/GlobalStyles";
// Opret en tab navigator (bundnavigation)
const Tab = createBottomTabNavigator();
// Definer et custom tema (her: hvid baggrund)

const navTheme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, background: "#FFFFFF" } };

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            header: () => <Header />, // Viser min egen header med logo
            tabBarActiveTintColor: palette.teal, // Aktiv farve på ikon/tekst
            tabBarStyle: { height: 64, paddingBottom: 8, paddingTop: 8 }, // Styling af bundbaren
             // Hvilket ikon der skal vises afhængigt af hvilken tab det er
            tabBarIcon: ({ color, size }) => {
              if (route.name === "Kort") {
                return <Ionicons name="location-outline" size={size} color={color} />;
              }
              if (route.name === "Profil") {
                // giv Profil et person-ikon
                return <Ionicons name="person-circle-outline" size={size} color={color} />;
              }
              if (route.name === "Kontakt") {
                // giv Kontakt et note/edit-ikon
                return <MaterialCommunityIcons name="note-edit-outline" size={size} color={color} />;
              }
            }
            ,
          })}
        >
           {/* Her defineres de tre faner i bundnavigationen */}

          <Tab.Screen name="Kort" component={MapScreen} />
          <Tab.Screen name="Profil" component={ProfileScreen} />
          <Tab.Screen name="Kontakt" component={ContactScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

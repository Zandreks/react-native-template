import React from "react";
import { Home } from "../Screens/Home/Home";
import DetailsScreen from "../Screens/Details/DetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useTranslation } from "react-i18next";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SettingsScreen from "../Screens/SettingsScreen/SettingsScreen";
import MenuHeader from "../Components/MenuHeader/MenuHeader";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeRoutes() {
  return (
    <Stack.Navigator>
        <Stack.Group
            screenOptions={{
                headerRight: () => (
                <MenuHeader />
                ),
            }}
        >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Group>
    </Stack.Navigator>
  );
}

function SettingRoutes() {
    const { t } = useTranslation();

    return (
    <Stack.Navigator>
        <Stack.Group
            screenOptions={{
                headerRight: () => (
                    <MenuHeader />
                ),
            }}
        >
      <Stack.Screen
        options={{
          title: t("setting_tab_menu"),

        }}
        name="Settings"
        component={SettingsScreen}
      />
        </Stack.Group>
    </Stack.Navigator>
  );
}
export default function HomeRoot() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="HomeTab"
        options={{
          tabBarLabel: t("Home"),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="folder-home"
              color={color}
              size={26}
            />
          ),
        }}
        component={HomeRoutes}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarLabel: t("setting_tab_menu"),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-settings"
              color={color}
              size={26}
            />
          ),
        }}
        component={SettingRoutes}
      />
    </Tab.Navigator>
  );
}

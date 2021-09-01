import React from "react";
import { Home } from "../Screens/Home/Home";
import DetailsScreen from "../Screens/Details/DetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useTranslation } from "react-i18next";
import { Appbar, Menu } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SettingsScreen from "../Screens/SettingsScreen/SettingsScreen";
import i18next from "i18next";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function SettingRoutes() {
  const { t } = useTranslation();
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: t("setting_tab_menu"),
          headerRight: () => (
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={<Appbar.Action onPress={openMenu} icon="dots-vertical" />}
            >
              <Menu.Item
                onPress={async () => {
                  moment.locale("ru");
                  i18next.changeLanguage("ru");
                  await AsyncStorage.setItem("lang", "ru");
                  closeMenu();
                }}
                title="RU"
              />
              <Menu.Item
                onPress={async () => {
                  moment.locale("kk");
                  i18next.changeLanguage("kk");
                  await AsyncStorage.setItem("lang", "kk");
                  closeMenu();
                }}
                title="KK"
              />
            </Menu>
          ),
        }}
        name="Settings"
        component={SettingsScreen}
      />
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

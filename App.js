import React from "react";
import { store } from "./_helpers/store";
import "./_helpers/translate";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeRoutes from "./Routes/HomeRoot";
import ButtonPortal from "./Components/ButtonPortal/ButtonPortal";
// import "./_helpers/service";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <HomeRoutes />
        </NavigationContainer>
        <ButtonPortal />
      </PaperProvider>
    </Provider>
  );
}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";

import { HomeStack, ProfileStack, SearchStack } from "./navigation";

import { store } from "./redux/store";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="homeTab" component={HomeStack} />
          <Tab.Screen name="searchTab" component={SearchStack} />
          <Tab.Screen name="favoriteTab" component={HomeStack} />
          <Tab.Screen name="profile" component={ProfileStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

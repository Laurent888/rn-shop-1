import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import Icon from "react-native-vector-icons/SimpleLineIcons";

import firebase, { firebaseConfig } from "./services/firebase";

import { HomeStack, ProfileStack, SearchStack } from "./navigation";

import { store } from "./redux/store";

const Tab = createBottomTabNavigator();

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            showLabel: false,
            activeTintColor: "#e17055",
            inactiveTintColor: "#222",
            tabStyle: { marginTop: 2 },
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let iconName;
              if (route.name === "homeTab") {
                iconName = "home";
              } else if (route.name === "searchTab") {
                iconName = "magnifier";
              } else if (route.name === "favoriteTab") {
                iconName = "heart";
              } else if (route.name === "profile") {
                iconName = "user";
              }

              return <Icon name={iconName} size={24} color={color} />;
            },
          })}
        >
          <Tab.Screen name="homeTab" component={HomeStack} />
          <Tab.Screen name="searchTab" component={SearchStack} />
          <Tab.Screen name="favoriteTab" component={HomeStack} />
          <Tab.Screen name="profile" component={ProfileStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

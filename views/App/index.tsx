import React, { useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/SimpleLineIcons";

import { useDispatch, useSelector } from "react-redux";

import {
  HomeStack,
  ProfileStack,
  SearchStack,
  LoggedInStack,
} from "../../navigation";
import { setLoginToRedux, logoutFromRedux } from "../../utils/auth";

const Tab = createBottomTabNavigator();

export default function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);

  console.log(state.isLoggedIn, "IS LOGGED IN");

  useEffect(() => {
    const getUserFromStorage = async () => {
      const userData = await AsyncStorage.getItem("user");
      console.log(userData, "USER DATA FROM STORAGE");
      if (!userData) {
        logoutFromRedux(dispatch);
        return;
      }

      const user = JSON.parse(userData);
      setLoginToRedux(user, dispatch);
    };

    getUserFromStorage();
  }, []);

  return (
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
            } else if (route.name === "profile" || "login") {
              iconName = "user";
            }

            return <Icon name={iconName} size={24} color={color} />;
          },
        })}
      >
        <Tab.Screen name="homeTab" component={HomeStack} />
        <Tab.Screen name="searchTab" component={SearchStack} />
        <Tab.Screen name="favoriteTab" component={HomeStack} />
        {state.isLoggedIn ? (
          <Tab.Screen name="login" component={LoggedInStack} />
        ) : (
          <Tab.Screen name="profile" component={ProfileStack} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

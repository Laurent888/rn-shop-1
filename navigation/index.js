import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../views/shop/home/HomeScreen";
import DetailScreen from "../views/shop/home/DetailScreen";
import SearchScreen from "../views/shop/search/SearchScreen";
import ProfileScreen from "../views/shop/profile/ProfileScreen";
import ListProductsSreen from "../views/shop/search/listProductsScreen";
import LoginPage from "../views/auth/LoginPage";
import RegisterPage from "../views/auth/RegisterPage";

const Stack = createStackNavigator();

export const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="homeScreen"
      component={HomeScreen}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="detailScreen"
      component={DetailScreen}
    />
  </Stack.Navigator>
);

export const SearchStack = () => (
  <Stack.Navigator
    screenOptions={{ headerBackTitleVisible: false, headerTintColor: "#333" }}
  >
    <Stack.Screen
      name="searchScreen"
      component={SearchScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="listProductScreen" component={ListProductsSreen} />
    <Stack.Screen
      options={{ headerShown: false }}
      name="detailScreen"
      component={DetailScreen}
    />
  </Stack.Navigator>
);

export const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ title: "Sign in" }}
      name="profileScreen"
      component={LoginPage}
    />
    <Stack.Screen
      options={{ title: "Register" }}
      name="registerScreen"
      component={RegisterPage}
    />
  </Stack.Navigator>
);

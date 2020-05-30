import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../views/shop/home/HomeScreen";
import DetailScreen from "../views/shop/home/DetailScreen";
import SearchScreen from "../views/shop/search/SearchScreen";
import ProfileScreen from "../views/shop/profile/ProfileScreen";
import ListProductsSreen from "../views/shop/search/listProductsScreen";

const Stack = createStackNavigator();

export const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="homeScreen"
      component={HomeScreen}
    />
    <Stack.Screen name="detailScreen" component={DetailScreen} />
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
    <Stack.Screen name="detailScreen" component={DetailScreen} />
  </Stack.Navigator>
);

export const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="profileScreen" component={ProfileScreen} />
  </Stack.Navigator>
);

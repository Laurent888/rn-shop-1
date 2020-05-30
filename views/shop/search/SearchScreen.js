import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Categories from "../../../components/search/categories";

const SearchScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Categories />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});

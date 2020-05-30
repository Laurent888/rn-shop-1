import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import theme, { colors } from "../../../styles/styles";

const Header = () => {
  return (
    <View style={s.container}>
      <Text style={theme.primaryTitle}>Hello</Text>
      <View style={s.searchBar}>
        <Icon name="ios-search" style={s.searchIcon} />
        <TextInput placeholder="What are you looking for ?" style={s.input} />
      </View>
    </View>
  );
};

export default Header;

const s = StyleSheet.create({
  container: {
    height: 100,
    padding: 20,
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: "row",
    marginVertical: 8,
    borderBottomColor: colors.darkColor,
    borderBottomWidth: 2,
    marginHorizontal: 10,
  },
  searchIcon: {
    fontSize: 25,
    marginRight: 10,
  },
  input: {
    fontSize: 18,
    fontWeight: "600",
    paddingVertical: 5,
  },
});

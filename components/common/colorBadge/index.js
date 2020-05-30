import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ColorBadge = ({ color }) => {
  return <View style={[s.container, { backgroundColor: color }]}></View>;
};

export default ColorBadge;

const s = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: "#ccc",
    width: 30,
    height: 30,
    marginRight: 7,
  },
});

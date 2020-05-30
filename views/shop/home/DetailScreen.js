import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DetailScreen = ({ route }) => {
  console.log(route, "******DETAIL SCREEN**");
  return (
    <View>
      <Text>This is the Detail screen</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});

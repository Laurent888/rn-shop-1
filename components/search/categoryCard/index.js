import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CategoryCard = ({ label, image }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={s.container}>
        <Image source={{ uri: image }} style={s.image} />
        <View style={s.overlay}></View>
        <Text style={s.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const s = StyleSheet.create({
  container: {
    width: 165,
    height: 165,
    borderWidth: 0.5,
    borderColor: "#ccc",
    position: "relative",
  },
  label: {
    fontSize: 30,
    fontWeight: "700",
    position: "absolute",
    bottom: 15,
    right: 15,
    textTransform: "capitalize",
    color: "#fff",
    zIndex: 200,
  },
  image: {
    resizeMode: "cover",
    zIndex: 0,
    flex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.2)",
    zIndex: 100,
  },
});

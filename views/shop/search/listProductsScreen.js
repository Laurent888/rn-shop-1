import React, { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

import ListProducts from "../../../components/search/listProducts";

const ListProductsSreen = ({ route, navigation }) => {
  const id = route.params.category;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "All shoes",
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ListProducts id={id} />
    </View>
  );
};

export default ListProductsSreen;

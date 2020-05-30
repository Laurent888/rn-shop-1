import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import categories from "../../../data/data-general.json";
import theme from "../../../styles/styles";
import CategoryCard from "../categoryCard";

const Categories = () => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Categories</Text>
      <ScrollView>
        <View style={s.list}>
          {categories.categories.map((c, i) => (
            <CategoryCard key={i} id={c.id} label={c.label} image={c.image} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  title: {
    fontSize: theme.primaryTitle.fontSize,
    fontWeight: theme.primaryTitle.fontWeight,
    paddingVertical: 20,
    paddingHorizontal: 20,
    color: "#333",
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

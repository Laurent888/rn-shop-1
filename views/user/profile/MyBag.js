import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import theme from "../../../styles/styles";

export default function MyBag() {
  const myBag = useSelector((state) => state.products.userBagProducts);

  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.headerText}>Shoes </Text>
        <Text style={s.headerText}>{id === "men_all" ? "men" : "ladies"}</Text>
      </View>
      <ScrollView>
        <View style={s.listContainer}>
          {myBag.map((el, i) => (
            <ProductCard
              key={el.id}
              id={el.id}
              image={el.image}
              price={el.price}
              name={el.name}
              brand={el.brand}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    backgroundColor:
      "linear-gradient(135deg, rgba(225,112,85,0.6362920168067228) 26%, rgba(222,150,86,1) 75%)",
  },
  headerText: {
    fontSize: theme.primaryTitle.fontSize,
    fontWeight: theme.primaryTitle.fontWeight,
    color: "#fff",
  },
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingTop: 20,
  },
});

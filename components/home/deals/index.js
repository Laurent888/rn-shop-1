import React from "react";
import { Text, View, ScrollView, Image } from "react-native";

import ProductCard from "../../common/productCard";
import s from "./styles";
import theme from "../../../styles/styles";

const Deals = ({ data }) => {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={theme.secondaryTitle}>Women shoes</Text>
        <Text style={theme.primaryTitle}>Features shoes</Text>
      </View>

      <View style={s.imgContainer}>
        <Image
          style={s.image}
          source={{
            uri:
              "https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          }}
        />
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 15 }}
      >
        {data.map((i, idx) => (
          <ProductCard
            key={i.id}
            id={i.id}
            image={i.image}
            price={i.price}
            name={i.name}
            brand={i.brand}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Deals;

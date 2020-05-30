import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

import theme from "../../../styles/styles";

import ProductCard from "../../common/productCard";

const { width } = Dimensions.get("screen");

const Featured = ({ data }) => {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={theme.secondaryTitle}>Men Shoes</Text>
        <Text style={[theme.primaryTitle, { marginTop: 4, marginBottom: 15 }]}>
          Our selection
        </Text>
      </View>
      <View style={s.imgContainer}>
        <Image
          source={{
            uri:
              "https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          }}
          style={s.image}
        />
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 15 }}
      >
        {data.map((s, i) => (
          <ProductCard
            key={s.id}
            id={s.id}
            image={s.image}
            price={s.price}
            name={s.name}
            brand={s.brand}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Featured;

const s = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  header: {
    paddingHorizontal: 20,
  },
  imgContainer: {
    height: 300,
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
});

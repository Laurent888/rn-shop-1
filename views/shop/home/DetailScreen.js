import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { types } from "../../../redux/types";
import ColorBadge from "../../../components/common/colorBadge";

const { width } = Dimensions.get("screen");

const DetailScreen = ({ route }) => {
  const { currentProduct, loading } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: types.GET_SINGLE_PRODUCT_START,
      payload: route.params.id,
    });

    return () => {
      dispatch({ type: types.REMOVE_CURRENT_PRODUCT });
    };
  }, []);

  console.log(currentProduct, "currentProduct");
  if (!currentProduct)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );

  const {
    brand,
    id,
    image,
    name,
    price,
    sellingAttributes,
    articleColorNames,
    rgbColors,
  } = currentProduct;

  return (
    <ScrollView>
      <View style={s.imageContainer}>
        <Image source={{ uri: image }} style={s.image} />
      </View>

      <View style={s.descContainer}>
        <Text style={s.header}>Description</Text>
        <View style={s.rowDesc}>
          <Text style={s.label}>Name: </Text>
          <Text>{name}</Text>
        </View>
        <View style={s.rowDesc}>
          <Text style={s.label}>Price: </Text>
          <Text>{price}</Text>
        </View>
        <View style={s.rowDesc}>
          <Text style={s.label}>Category: </Text>
          <Text>{brand}</Text>
        </View>
        <View style={s.rowDesc}>
          <Text style={s.label}>Available colors: </Text>
          <View style={s.colorsList}>
            {rgbColors.map((el, i) => (
              <ColorBadge key={i} color={el} />
            ))}
          </View>
        </View>
        {sellingAttributes && (
          <View style={s.rowDesc}>
            <Text
              style={{
                fontWeight: "700",
                textTransform: "uppercase",
                fontSize: 20,
              }}
            >
              {sellingAttributes[0]}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const s = StyleSheet.create({
  imageContainer: {
    height: 400,
    width: width,
    marginTop: -30,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  descContainer: {
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  header: {
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 20,
  },
  rowDesc: {
    flexDirection: "row",
    paddingVertical: 8,
  },
  label: {
    fontWeight: "700",
    textTransform: "uppercase",
    width: 180,
  },
  colorsList: {
    flexDirection: "row",
  },
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ColorBadge from "../../../components/common/colorBadge";

import s from "./styles";

export default function DescriptionProductSection({ currentProduct }) {
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
    <>
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
      <View style={[s.rowDesc, s.rowColors]}>
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
    </>
  );
}

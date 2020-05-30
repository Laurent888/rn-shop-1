import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import s from "./style";
import theme from "../../../styles/styles";

const ProductCard = (props) => {
  const { image, price, name, brand } = props;

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("detailScreen", { id: props.id });
  };

  return (
    <TouchableOpacity style={s.container} onPress={handlePress}>
      <View style={s.imageContainer}>
        <Image
          source={{ uri: image }}
          style={{
            flex: 1,
            resizeMode: "cover",
          }}
        />
      </View>

      <View style={s.cardDetails}>
        <View>
          <Text
            style={{ paddingVertical: 10, fontSize: 16, fontWeight: "600" }}
          >
            {price} $
          </Text>
        </View>

        <Text style={{ textTransform: "capitalize" }}>{name}</Text>
        <Text style={{ textTransform: "capitalize" }}>{brand}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

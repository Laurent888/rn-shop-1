import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IonIcon from "react-native-vector-icons/Ionicons";
// import Animated from "react-native-reanimated";

import { types } from "../../../redux/types";
import ColorBadge from "../../../components/common/colorBadge";
import LoadingScreen from "../../../components/common/loading";

const { width } = Dimensions.get("screen");

const DetailScreen = ({ route, navigation }) => {
  const { currentProduct } = useSelector((state) => state.products);
  3;
  const y = new Animated.Value(0);

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
    });
    dispatch({
      type: types.GET_SINGLE_PRODUCT_START,
      payload: route.params.id,
    });

    return () => {
      dispatch({ type: types.REMOVE_CURRENT_PRODUCT });
    };
  }, []);

  if (!currentProduct) return <LoadingScreen />;

  // ANIMATION

  const IMG_HEIGHT = 400;

  const imageHeight = y.interpolate({
    inputRange: [-100, 0],
    outputRange: [IMG_HEIGHT + 100, IMG_HEIGHT],
    extrapolateRight: "clamp",
  });

  const translateY = y.interpolate({
    inputRange: [0, IMG_HEIGHT],
    outputRange: [0, -IMG_HEIGHT + 250],
    extrapolateLeft: "clamp",
  });

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
      <TouchableOpacity
        style={{ position: "absolute", top: 25, left: 15, zIndex: 100 }}
        onPress={() => navigation.goBack()}
      >
        <IonIcon name="ios-close-circle" size={40} color="#888" />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          position: "relative",
          backgroundColor: "#fff",
        }}
      >
        {/* IMAGE HEADER */}
        <Animated.View
          style={[
            s.imageContainer,
            {
              height: imageHeight,
              transform: [{ translateY: translateY }],
            },
          ]}
        >
          <Image source={{ uri: image }} style={s.image} />
        </Animated.View>

        {/* CONTENT */}
        <Animated.ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: { y },
              },
            },
          ])}
        >
          <Animated.View
            style={{
              height: IMG_HEIGHT,
              width,
              transform: [{ translateY }],
            }}
          />
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
          </View>
        </Animated.ScrollView>
      </View>
    </>
  );
};

export default DetailScreen;

const s = StyleSheet.create({
  imageContainer: {
    width: width,
    ...StyleSheet.absoluteFill,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    marginTop: -30,
  },
  descContainer: {
    paddingHorizontal: 30,
    paddingVertical: 40,
    backgroundColor: "#fff",
    shadowOffset: { height: -20, width: 0 },
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 15,
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
  rowColors: {
    alignItems: "center",
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

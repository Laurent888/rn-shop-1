import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IonIcon from "react-native-vector-icons/Ionicons";
// import Animated from "react-native-reanimated";

import { colors } from "../../../styles/styles";
import { types } from "../../../redux/types";

import LoadingScreen from "../../../components/common/loading";

import DescriptionProductSection from "../../../components/common/DescriptionProduct";
import ItemModal from "../../../components/ItemModal";

const { width } = Dimensions.get("screen");

const DetailScreen = ({ route, navigation }) => {
  const { currentProduct } = useSelector((state) => state.products);
  3;
  const [modalIsVisible, setModalIsVisible] = useState(false);
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

  const { image } = currentProduct;

  return (
    <>
      <ItemModal
        isVisible={modalIsVisible}
        setIsVisible={() => setModalIsVisible(false)}
        currentProduct={currentProduct}
        clicked={() => {}}
      />

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
            {/* DESCRIPTION SECTION */}
            <DescriptionProductSection currentProduct={currentProduct} />

            {/* ADD BUTTON */}
            <TouchableOpacity
              onPress={() => setModalIsVisible(true)}
              style={{
                width: 200,
                alignItems: "center",
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              <Text style={s.addProductBtn}>Add to Bag</Text>
            </TouchableOpacity>
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

  addProductBtn: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: colors.primaryColor,
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
  },
});

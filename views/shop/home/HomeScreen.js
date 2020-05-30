import React, { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { types } from "../../../redux/types";

import Header from "../../../components/home/header";
import Featured from "../../../components/home/featured";
import Deals from "../../../components/home/deals";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { loading, men, women } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch({ type: types.GET_PRODUCT_START });
  }, []);

  if (!loading) {
    const menProducts = men.shoes.filter((s, i) => i < 8);
    const womenShoes = women.shoes.filter((s, i) => i < 8);
    return (
      <SafeAreaView>
        <ScrollView>
          <Header />
          <Featured data={menProducts} />
          <Deals data={womenShoes} />
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: "600",
          }}
        >
          Loading...
        </Text>
      </View>
    );
  }
};

export default HomeScreen;

const styles = StyleSheet.create({});

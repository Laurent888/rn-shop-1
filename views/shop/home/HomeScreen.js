import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { types } from "../../../redux/types";

import Header from "../../../components/home/header";
import Featured from "../../../components/home/featured";
import Deals from "../../../components/home/deals";
import LoadingScreen from "../../../components/common/loading";

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
    return <LoadingScreen />;
  }
};

export default HomeScreen;

const styles = StyleSheet.create({});

import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import firebase from "../../../services/firebase";

import { setLoginToRedux, logoutFromRedux } from "../../../utils/auth";
import { types } from "../../../redux/types";

import Header from "../../../components/home/header";
import Featured from "../../../components/home/featured";
import Deals from "../../../components/home/deals";
import LoadingScreen from "../../../components/common/loading";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { loading, men, women } = useSelector((state) => state.products);
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch({ type: types.GET_PRODUCT_START });
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        setLoginToRedux(user, dispatch);
      } else {
        logoutFromRedux(dispatch);
      }
    });
  }, []);

  if (!loading) {
    const menProducts = men.shoes.filter((s, i) => i < 8);
    const womenShoes = women.shoes.filter((s, i) => i < 8);
    return (
      <SafeAreaView>
        <Text>{isLoggedIn ? "Logged IN !!" : "not logged in"}</Text>
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

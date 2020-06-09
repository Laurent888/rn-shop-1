import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import firebase from "../../../services/firebase";

export default function ProfileScreen({ navigation }) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const isLoggedIn = auth.isLoggedIn;

    if (!isLoggedIn) {
      navigation.navigate("");
    }
  }, []);

  return (
    <View style={s.container}>
      <Text>Profile page !</Text>

      <View style={s.linkList}>
        <TouchableOpacity onPress={() => navigation.navigate("mybag")}>
          <Text style={s.button}>My Bag</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => firebase.auth().signOut()}>
          <Text style={s.button}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  linkList: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },
});

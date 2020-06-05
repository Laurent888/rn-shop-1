import React, { useState } from "react";
import { Text, View, TextInput, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";

const { width } = Dimensions.get("screen");

const INPUT_WIDTH = width / 1.5;

const LoginInput = ({ iconName, label, placeholder, onChangeText, name }) => {
  const s = styles(false);

  return (
    <View style={[s.container, { width: INPUT_WIDTH }]}>
      <Icon style={s.icon} name={iconName} />
      <View style={s.inputGroun}>
        <Text style={[s.label, { opacity: 0 }]}>{label}</Text>
        <TextInput
          name={name}
          style={s.textInput}
          placeholder={placeholder}
          onChangeText={(value) => onChangeText(value, name)}
          secureTextEntry={name === "password" ? true : false}
        />
      </View>
    </View>
  );
};

export default LoginInput;

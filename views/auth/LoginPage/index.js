import React, { useState } from "react";
import {
  View,
  Dimensions,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Text,
  TextInput,
} from "react-native";
import * as Yup from "yup";

import Logo from "../../../assets/logo.png";

import s from "./styles";
import FormInput from "../../../components/common/FormInput";

const { width } = Dimensions.get("screen");

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid format").required("Email is required"),
    password: Yup.string()
      .min(6, "minimun 6 characters")
      .required("Password is required"),
  });

  const handleChange = (value, key) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    validationSchema
      .validate(formData)
      .then((valid) => console.log(valid))
      .catch((err) => console.log(err.errors));
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[s.container, { width }]}>
        <Image
          source={Logo}
          style={{
            width: 100,
            height: 100,
            resizeMode: "cover",
            marginBottom: 30,
          }}
        />

        <View style={s.formContainer}>
          <FormInput
            name="email"
            iconName="ios-mail"
            label="Email Adress"
            placeholder="Email Adress"
            onChangeText={handleChange}
          />
          <FormInput
            name="password"
            iconName="ios-key"
            label="Password"
            placeholder="Password"
            onChangeText={handleChange}
          />

          <View style={s.btnContainer}>
            <Button title="Submit" color="#fff" onPress={handleSubmit} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginPage;

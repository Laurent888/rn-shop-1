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
import { useDispatch } from "react-redux";

import firebase from "../../../services/firebase";
import { logoutFromRedux } from "../../../utils/auth";

import Logo from "../../../assets/logo.png";

import s from "./styles";
import FormInput from "../../../components/common/FormInput";

const { width } = Dimensions.get("screen");

const LoginPage = ({ navigation }) => {
  const dispatch = useDispatch();
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
      .then((valid) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(formData.email, formData.password)
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err.errors));

    setFormData({
      email: "",
      password: "",
    });
  };

  const navigateToRegister = () => {
    navigation.navigate("registerScreen");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[s.container, { width }]}>
        <View style={s.registerBtn}>
          <Button
            title="Logout"
            color="#e17055"
            onPress={() => {
              firebase.auth().signOut();
            }}
          />
        </View>
        <View style={s.registerBtn}>
          <Button
            title="Register"
            color="#e17055"
            onPress={navigateToRegister}
          />
        </View>
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

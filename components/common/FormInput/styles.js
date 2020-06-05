import { StyleSheet } from "react-native";

export default (isFocused) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "flex-start",
      marginBottom: 30,
    },
    inputGroun: {
      alignItems: "flex-start",
      width: "100%",
    },
    label: {
      marginBottom: 5,
    },
    textInput: {
      width: "80%",
      paddingVertical: 5,
      borderBottomWidth: 1.5,
      borderBottomColor: isFocused ? "#e17055" : "#bbb",
    },
    icon: {
      fontSize: 30,
      marginRight: 20,
      color: "#555",
    },
  });

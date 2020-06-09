import { StyleSheet } from "react-native";
import { colors } from "../../../styles/styles";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  formContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    marginTop: 20,
    paddingVertical: 5,
    paddingHorizontal: 40,
    backgroundColor: colors.primaryColor,
  },
  registerBtn: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: -10,
    marginBottom: 20,
  },
});

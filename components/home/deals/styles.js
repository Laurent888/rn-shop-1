import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  imgContainer: {
    height: 300,
    width,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  header: {
    marginHorizontal: 20,
  },
});

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  rowDesc: {
    flexDirection: "row",
    paddingVertical: 8,
  },
  rowColors: {
    alignItems: "center",
  },
  label: {
    fontWeight: "700",
    textTransform: "uppercase",
    width: 180,
  },
  colorsList: {
    flexDirection: "row",
  },
});

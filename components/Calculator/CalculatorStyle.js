import { StyleSheet } from "react-native";

const calculatorStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  name: {
    flex: 2,
  },

  display: {
    flex: 2,
    width: 400,
  },
  keyboard: {
    width: "100%",
    height: "100%",
    flex: 6,
    flexDirection: "column",
    justifyContent: "space-around",
  },
});

export default calculatorStyle;

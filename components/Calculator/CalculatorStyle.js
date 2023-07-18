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
    flex: 1,
  },

  display: {
    flex: 2,
  },
  keyboard: {
    width: "100%",
    flex: 4,
    flexDirection: "column",
    justifyContent: "space-around",
  },
});

export default calculatorStyle;

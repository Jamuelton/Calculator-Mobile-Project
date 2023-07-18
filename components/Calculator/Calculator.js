import { Text, TouchableHighlight, View } from "react-native";

import calculatorStyle from "./CalculatorStyle";
import { Button } from "../Button/Button";
import { Display } from "../Display/Display";

export function Calculator() {
  return (
    <View style={calculatorStyle.container}>
      <View style={calculatorStyle.name}>
        <Text>Jamu`s Calculator</Text>
      </View>
      <View style={calculatorStyle.display}>
        <Display displayContent={secondNum} secontContent={numberDisplay()} />
      </View>
      <View style={calculatorStyle.keyboard}>)</View>
    </View>
  );
}

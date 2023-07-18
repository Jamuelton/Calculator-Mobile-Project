import { Text, TouchableHighlight, View } from "react-native";

import calculatorStyle from "./CalculatorStyle";
import { Button } from "../Button/Button";
import { Display } from "../Display/Display";

export function Calculator() {
  const [display, setDisplay] = useState("0");
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [operation, setOperation] = useState("");

  const handleNumberPress = (number) => {
    if (firstNum.length < 10) {
      if (number === "." && firstNum.includes(".")) {
        return;
      }
      setFirstNum(firstNum + number);
    }
  };

  const handleOperation = (op) => {
    setOperation(op.toString());
    setSecondNum(firstNum);
    setFirstNum("");
  };

  const handleClearPress = () => {
    setDisplay("0");
    setFirstNum("");
    setOperation("");
    setSecondNum("");
  };
  return (
    <View style={calculatorStyle.container}>
      <View style={calculatorStyle.name}>
        <Text>Jamu`s Calculator</Text>
      </View>
      <View style={calculatorStyle.display}>
        <Display displayContent={secondNum} secontContent={numberDisplay()} />
      </View>
      <View style={calculatorStyle.keyboard}>
        <View style={calculatorStyle.buttonRow}>
          <TouchableHighlight>
            <Button number="MR" color="#95afc0" />
          </TouchableHighlight>

          <TouchableHighlight>
            <Button number="M+" color="#95afc0" />
          </TouchableHighlight>

          <TouchableHighlight>
            <Button number="M-" color="#95afc0" />
          </TouchableHighlight>

          <TouchableHighlight onPress={handleClearPress}>
            <Button number="MC" color="#95afc0" />
          </TouchableHighlight>
        </View>
        <View style={calculatorStyle.buttonRow}>
          <TouchableHighlight onPress={() => handleNumberPress("7")}>
            <Button number="7" color="#535c68" />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => handleNumberPress("8")}>
            <Button number="8" color="#535c68" />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => handleNumberPress("9")}>
            <Button number="9" color="#535c68" />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => handleOperation("/")}>
            <Button number="/" color="#f0932b" />
          </TouchableHighlight>
        </View>
        <View style={calculatorStyle.buttonRow}>
          <TouchableHighlight onPress={() => handleNumberPress("4")}>
            <Button number="4" color="#535c68" />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => handleNumberPress("5")}>
            <Button number="5" color="#535c68" />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => handleNumberPress("6")}>
            <Button number="6" color="#535c68" />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => handleOperation("*")}>
            <Button number="x" color="#f0932b" />
          </TouchableHighlight>
        </View>
        <View style={calculatorStyle.buttonRow}>
          <TouchableHighlight onPress={() => handleNumberPress("1")}>
            <Button number="1" color="#535c68" />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => handleNumberPress("2")}>
            <Button number="2" color="#535c68" />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => handleNumberPress("3")}>
            <Button number="3" color="#535c68" />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => handleOperation("-")}>
            <Button number="-" color="#f0932b" />
          </TouchableHighlight>
        </View>
        <View style={calculatorStyle.buttonRow}>
          <TouchableHighlight onPress={() => operationSelect()}>
            <Button number="=" color="#f0932b" />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => handleNumberPress("0")}>
            <Button number="0" color="#535c68" />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => handleNumberPress(".")}>
            <Button number="." color="#535c68" />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => handleOperation("+")}>
            <Button number="+" color="#f0932b" />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

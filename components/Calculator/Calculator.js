import { Text, TouchableHighlight, View } from "react-native";

import calculatorStyle from "./CalculatorStyle";
import { Button } from "../Button/Button";
import { Display } from "../Display/Display";
import { useState } from "react";

export function Calculator() {
  const [display, setDisplay] = useState("0");
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [operation, setOperation] = useState("");
  const [memory, setMemory] = useState(false);
  const [mVAlue, setMValue] = useState("0");

  const handleNumberPress = (number) => {
    if (firstNum.length < 10) {
      if (number === "." && firstNum.includes(".")) {
        return;
      }
      setFirstNum(firstNum + number);
    }
  };

  const handleNumberDelete = () => {
    setFirstNum(firstNum.slice(0, -1));
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
  const handleClearLine = () => {
    setFirstNum("");
  };

  const handleMemoryPlus = (number) => {
    setMValue((parseFloat(display) + parseFloat(number)).toString());
    setMemory(true);
    memoryDisplay();
  };

  const handleMemoryMinus = (number) => {
    setMValue((parseFloat(mVAlue) - parseFloat(number)).toString());
  };

  const handleMemoryR = () => {
    setDisplay(mVAlue);
  };

  const handleMemoryC = () => {
    setMValue("0");
    setMemory(false);
  };

  console.log(display);
  console.log(mVAlue);
  console.log(memory);

  const operationSelect = () => {
    switch (operation) {
      case "+":
        setDisplay((parseFloat(secondNum) + parseFloat(firstNum)).toString());
        break;
      case "-":
        setDisplay((parseFloat(secondNum) - parseFloat(firstNum)).toString());
        break;
      case "*":
        setDisplay((parseFloat(secondNum) * parseFloat(firstNum)).toString());
        break;
      case "/":
        setDisplay((parseFloat(secondNum) / parseFloat(firstNum)).toFixed(8));
        break;
      default:
        setDisplay("0");
        break;
    }
  };

  const numberDisplay = () => {
    if (display != "0") {
      return <Display secontContent={display.toString()} displayContent="" />;
    } else {
      return <Display secontContent={firstNum.toString()} displayContent="" />;
    }
  };

  const memoryDisplay = () => {
    if (memory === true) {
      return "M";
    }
  };

  return (
    <View style={calculatorStyle.container}>
      <View style={calculatorStyle.name}>
        <Text>Jamu`s Calculator</Text>
      </View>
      <View style={calculatorStyle.display}>
        <Display secontContent={numberDisplay()} memory={memoryDisplay()} />
      </View>
      <View style={calculatorStyle.keyboard}>
        <View style={calculatorStyle.buttonRow}>
          <TouchableHighlight onPress={() => handleMemoryR()}>
            <Button number="MR" color="#95afc0" />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => handleMemoryPlus(mVAlue)}>
            <Button number="M+" color="#95afc0" />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => handleMemoryMinus(display)}>
            <Button number="M-" color="#95afc0" />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => handleMemoryC()}>
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
        <View style={calculatorStyle.buttonRow}>
          <TouchableHighlight onPress={() => handleClearPress()}>
            <Button number="C" color="#e74c3c" />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => handleNumberDelete()}>
            <Button number="<" color="#535c68" />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => handleClearLine()}>
            <Button number="CE" color="#16a085" />
          </TouchableHighlight>
          <TouchableHighlight>
            <Button number="Jamu" color="#f1c40f" />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

import { Text, View } from "react-native";
import displayStyle from "./Styles";

export function Display({ displayContent, secontContent, memory }) {
  return (
    <View style={displayStyle.container}>
      <Text style={displayStyle.contentMemory}>{memory}</Text>
      <Text style={displayStyle.contentSecond}>{secontContent}</Text>
    </View>
  );
}

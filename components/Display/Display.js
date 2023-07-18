import { Text, View } from "react-native";
import displayStyle from "./Styles";

export function Display({ displayContent, secontContent, memory }) {
  return (
    <View style={displayStyle.container}>
      <Text style={displayStyle.content}>{displayContent}</Text>
      <Text style={displayStyle.content}>{secontContent}</Text>
      <Text style={displayStyle.content}>{memory}</Text>
    </View>
  );
}

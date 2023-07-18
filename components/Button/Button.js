import { Text, View } from "react-native";
import buttonStyle from "./Style";

export function Button({ number, color }) {
  return (
    <View style={[buttonStyle.container, { backgroundColor: color }]}>
      <Text style={buttonStyle.number}>{number}</Text>
    </View>
  );
}

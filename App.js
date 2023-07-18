import { StyleSheet, Text, View } from "react-native";
import { Calculator } from "./components/Calculator/Calculator";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Teste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

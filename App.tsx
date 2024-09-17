import { StyleSheet, View } from "react-native";
import Button from "./src/components/button";

export default function App() {
  return (
    <View style={styles.container}>
      <Button.Root>
        <Button.Text>Create Wallet</Button.Text>
      </Button.Root>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { AddIcon } from "../../ui/Vectors/AddIcon";

export function Apresentation() {
  const [count, setCount] = React.useState(0);

  return (
    <TouchableHighlight style={styles.container}>
      <Text
        style={[
          {
            fontSize: 30,
            color: "#fff",
            fontWeight: "bold",
            maxWidth: 300,
            textAlign: "center",
          },
        ]}
      >
        React Native Demonstração
      </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0, 0.3)",
    padding: 10,
    marginBottom: 110,
  },
});

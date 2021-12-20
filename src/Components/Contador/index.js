import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
} from "react-native";
import React from "react";

export function Count({ isOpen, setOpen }) {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <TouchableHighlight
        style={{
          padding: 10,
          backgroundColor: "rgba(0,0,0, 0.3)",
          marginBottom: 20,
        }}
      >
        <Text style={[{ fontSize: 20, color: "white" }]}>Contador</Text>
      </TouchableHighlight>
      <View
        style={[
          {
            backgroundColor: "#888",
            alignItems: "center",
            padding: 15,
            borderRadius: 15,
            width: "80%",
          },
        ]}
      >
        <Text style={[{ color: "white", marginBottom: 10 }]}>{count}</Text>
        <View style={styles.container2}>
          <View style={styles.container3}>
            <TouchableHighlight
              style={[
                {
                  height: 35,
                  width: 40,
                  borderRadius: 10,
                  backgroundColor: "yellow",
                },
              ]}
            >
              <Button
                title="+"
                color="#5cceee"
                onPress={() => setCount(count + 1)}
                style={styles.button}
              />
            </TouchableHighlight>
          </View>
          <View style={styles.container3}>
            <TouchableHighlight
              style={[
                {
                  height: 35,
                  width: 40,
                  borderRadius: 10,
                  backgroundColor: "yellow",
                },
              ]}
            >
              <Button
                title="-"
                color="#5cceee"
                onPress={() => setCount(count - 1)}
                style={styles.button}
              />
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.container3}>
          <Button
            title="Sair"
            color="#5cceee"
            onPress={() => setOpen(!isOpen)}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container2: {
    display: "flex",
    flexDirection: "row",
  },
  container3: {
    padding: 10,
  },
  button: {
    fontSize: 18,
    borderRadius: 50,
    width: 100,
    height: 100,
    backgroundColor: "red",
  },

  text: {},
});

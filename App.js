import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import { Apresentation } from "./src/Components/Apresentation";
import { Count } from "./src/Components/Contador";
import React from "react";

export default function App() {
  const [count, setCount] = React.useState(false);
  const [group, setGroup] = React.useState(false);

  const image = {
    uri: "https://blog.rocketseat.com.br/content/images/size/w2000/2019/03/React-Hooks-Comoutilizar--motivac-o-es-eexemplos-pra-ticos.png",
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Apresentation />

        {count && <Count isOpen={count} setOpen={setCount} />}
        {!count && (
          <Button
            title="Contador"
            color="#5cceee"
            onPress={() => setCount(!count)}
          />
        )}
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
  },
  image: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

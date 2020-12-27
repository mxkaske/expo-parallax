import React from "react";
import { StyleSheet, View } from "react-native";
import { Palette } from "./src/styles";
import { CardList } from "./src/example/components";

export default function App() {
  return (
    <View style={styles.container}>
      <CardList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.richBlack,
    alignItems: "center",
    justifyContent: "center",
  },
});

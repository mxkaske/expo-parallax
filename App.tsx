import React from "react";
import { StyleSheet, View } from "react-native";
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
    alignItems: "center",
    justifyContent: "center",
  },
});

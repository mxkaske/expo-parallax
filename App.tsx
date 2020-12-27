import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ParallaxScrollView, ParallaxView } from "./src/components";
import { Palette, Spacing } from "./src/styles";
import faker from "faker";

const example = [
  {
    color: Palette.bluetiful,
    text: faker.lorem.paragraphs(2),
  },
  {
    color: Palette.darkPurple,
    text: faker.lorem.paragraphs(2),
  },
  {
    color: Palette.chinaPink,
    text: faker.lorem.paragraphs(2),
  },
  {
    color: Palette.richBlack,
    text: faker.lorem.paragraphs(2),
  },
  {
    color: Palette.candyPink,
    text: faker.lorem.paragraphs(2),
  },
  {
    color: Palette.mediumSlateBlue,
    text: faker.lorem.paragraphs(2),
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <ParallaxScrollView
        style={{ marginVertical: Spacing.xxl, backgroundColor: "white" }}
        config={{ onlyOnce: true }}
      >
        {example.map(({ color, text }, index) => (
          <ParallaxView
            key={index}
            style={{
              marginVertical: Spacing.xl,
              padding: Spacing.xl,
              backgroundColor: color,
            }}
            transition={{
              scale: 1.1,
            }}
          >
            <Text style={{ color: "white" }}>{text}</Text>
          </ParallaxView>
        ))}
      </ParallaxScrollView>
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

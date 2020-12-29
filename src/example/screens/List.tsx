import React from "react";
import { View } from "react-native";
import {
  ParallaxScrollView,
  ParallaxViewConfigProps,
} from "../../../src/components";
import { Palette, Spacing } from "../styles";
import { Card } from "../components";
import { AppNavigationProps } from "../components/Navigation";
import { example } from "../config";

const defaultConfig: ParallaxViewConfigProps = {
  onlyOnce: false,
  transition: {
    scale: 1,
    rotate: 0,
    opacity: 1,
  },
  initial: {
    scale: 0.5,
    rotate: -1,
    opacity: 0,
  },
};

const List = ({ navigation }: AppNavigationProps<"List">) => {
  return (
    <View style={{ backgroundColor: Palette.androidGreen }}>
      <ParallaxScrollView
        contentContainerStyle={{ padding: Spacing.xl }}
        config={defaultConfig}
      >
        {example.map((card, index) => (
          <Card
            key={index}
            onPress={() => navigation.push("Details", { card })}
            {...card}
          />
        ))}
      </ParallaxScrollView>
    </View>
  );
};

export default List;

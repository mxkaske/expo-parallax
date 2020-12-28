import React from "react";
import { View } from "react-native";
import { ParallaxScrollView } from "../../../src/components";
import { Palette, Spacing } from "../styles";
import { Card } from "../components";
import { AppNavigationProps } from "../components/Navigation";
import { example } from "../config";

const defaultConfig = { onlyOnce: true };

const List = ({ navigation }: AppNavigationProps<"List">) => {
  return (
    <View style={{ backgroundColor: Palette.androidGreen }}>
      <ParallaxScrollView
        contentContainerStyle={{ padding: Spacing.xl }}
        //config={defaultConfig}
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

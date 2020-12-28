import React from "react";
import { View } from "react-native";
import { ParallaxScrollView } from "../../../src/components";
import { Spacing } from "../../../src/styles";
import { Card } from "../components";
import { AppNavigationProps } from "../components/Navigation";
import { example } from "../config";

const List = ({ navigation, route }: AppNavigationProps<"List">) => {
  return (
    <View>
      <ParallaxScrollView
        contentContainerStyle={{ padding: Spacing.xl }}
        //config={{ onlyOnce: true }}
      >
        {example.map((props, index) => (
          <Card
            key={index}
            index={index}
            onPress={() => navigation.push("Details", { index })}
            {...props}
          />
        ))}
      </ParallaxScrollView>
    </View>
  );
};

export default List;

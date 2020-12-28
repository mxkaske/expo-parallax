import React from "react";
import { View, Text } from "react-native";
import { AppNavigationProps } from "../components/Navigation";
import { Palette, Typography, Spacing } from "../styles";
import { example } from "../config";

const Details = ({ route }: AppNavigationProps<"Details">) => {
  const index = route.params?.index || 0;
  const item = example[index];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Palette[item.color],
        padding: Spacing.xl,
      }}
    >
      <Text style={{ ...Typography.title, color: "white" }}>{item.title}</Text>
      <Text style={{ ...Typography.body, color: "white" }}>{item.text}</Text>
    </View>
  );
};

export default Details;

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppNavigationProps } from "../components/Navigation";
import { Palette, Typography, Spacing } from "../styles";

const Details = ({ route }: AppNavigationProps<"Details">) => {
  const card = route.params.card;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Palette[card.color],
        padding: Spacing.xl,
      }}
    >
      <View />
      <Text style={{ ...Typography.title, color: "white" }}>{card.title}</Text>
      <Text style={{ ...Typography.body, color: "white" }}>{card.text}</Text>
    </View>
  );
};

export default Details;

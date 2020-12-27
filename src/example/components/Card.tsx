import React from "react";
import { Text, StyleSheet } from "react-native";
import { ParallaxView } from "../../components";
import { Palette, Spacing, Typography } from "../../styles";

export interface CardContentProps {
  color: keyof typeof Palette;
  title: string;
  text: string;
}

interface CardProps extends CardContentProps {
  index: number;
}
const Card = ({ index, color, text, title }: CardProps) => {
  return (
    <ParallaxView
      key={index}
      style={{
        ...styles.container,
        backgroundColor: Palette[color],
      }}
      transition={{
        scale: 1.1,
      }}
    >
      <Text style={{ ...Typography.title, color: "white" }}>{title}</Text>
      <Text style={{ ...Typography.body, color: "white" }}>{text}</Text>
    </ParallaxView>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: Spacing.l,
    marginHorizontal: Spacing.xl,
    marginVertical: Spacing.xl,
    padding: Spacing.xl,
  },
});

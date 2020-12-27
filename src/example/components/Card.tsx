import React from "react";
import { Text, StyleSheet } from "react-native";
import { ParallaxView } from "../../components";
import { Palette, Spacing, Typography } from "../../styles";
import TouchableScale from "@jonny/touchable-scale";

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
      transition={{
        scale: 1.1,
        // rotate: 1
      }}
    >
      <TouchableScale
        style={{
          ...styles.container,
          backgroundColor: Palette[color],
        }}
        onPress={() => null}
      >
        <Text style={{ ...Typography.title, color: "white" }}>{title}</Text>
        <Text style={{ ...Typography.body, color: "white" }}>{text}</Text>
      </TouchableScale>
    </ParallaxView>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: Spacing.l,
    marginVertical: Spacing.l,
    padding: Spacing.xl,
  },
});

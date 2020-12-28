import React from "react";
import { Text, StyleSheet } from "react-native";
import { ParallaxView } from "../../components";
import { Palette, Spacing, Typography } from "../styles";
import TouchableScale from "@jonny/touchable-scale";

export interface CardContentProps {
  color: keyof typeof Palette;
  title: string;
  text: string;
}

interface CardProps extends CardContentProps {
  index: number;
  onPress: () => void;
}
const Card = ({ index, color, text, title, onPress }: CardProps) => {
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
        onPress={onPress}
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
    shadowColor: Palette.richBlack,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
});

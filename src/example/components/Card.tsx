import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ParallaxView } from "../../components";
import { Palette, Spacing, Typography } from "../styles";
import TouchableScale from "@jonny/touchable-scale";

export interface CardProps {
  id: string;
  color: keyof typeof Palette;
  title: string;
  text: string;
  onPress?: () => void;
}
const Card = ({ id, color, text, title, onPress }: CardProps) => {
  const config =
    id === "3"
      ? {
          onlyOnce: true,
          transition: {
            scale: 1,
            rotate: 0,
            opacity: 1,
          },
          initial: {
            scale: 0.6,
            rotate: 0,
            opacity: 1,
          },
        }
      : {};
  return (
    <ParallaxView config={config}>
      <TouchableScale onPress={onPress}>
        <View style={styles.container}>
          <View
            style={[
              styles.backgroundContainer,
              { backgroundColor: Palette[color] },
            ]}
          />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableScale>
    </ParallaxView>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.l,
    padding: Spacing.xl,
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: Spacing.l,
    shadowColor: Palette.richBlack,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  title: { ...Typography.title, color: "white" },
  text: { ...Typography.body, color: "white" },
});

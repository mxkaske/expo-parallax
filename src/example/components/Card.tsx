import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ParallaxView } from "../../components";
import { Palette, Spacing, Typography } from "../styles";
import TouchableScale from "@jonny/touchable-scale";
import CardImage, { CardImageProps } from "./CardImage";

export interface CardProps {
  id: string;
  color: keyof typeof Palette;
  title: string;
  text: string;
  image?: CardImageProps;
  onPress?: () => void;
}
const Card = ({ id, color, text, title, image, onPress }: CardProps) => {
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
          scroll: {
            translateY: -200,
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
          {image ? <CardImage {...image} /> : null}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
          </View>
        </View>
      </TouchableScale>
    </ParallaxView>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.l,
    shadowColor: Palette.richBlack,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: Spacing.l,
  },
  textContainer: {
    padding: Spacing.xl,
  },
  title: { ...Typography.title, color: "white" },
  text: { ...Typography.body, color: "white" },
});

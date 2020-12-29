import React, { useState } from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import { useComponentLayout } from "../../hooks";
import { Spacing } from "../styles";

export interface CardImageProps {
  source: ImageSourcePropType;
  height: number;
  width: number;
}

const CardImage = ({ source, height, width }) => {
  const { layout, onLayout } = useComponentLayout();
  const aspectRatio = height / width;
  return (
    <View style={style.container} onLayout={onLayout}>
      <Image
        source={source}
        resizeMode="contain"
        style={{ width: layout.width, height: layout.width * aspectRatio }}
      />
    </View>
  );
};

export default CardImage;

const style = StyleSheet.create({
  container: {
    maxHeight: 250,
    overflow: "hidden",
    borderTopLeftRadius: Spacing.l,
    borderTopRightRadius: Spacing.l,
  },
});

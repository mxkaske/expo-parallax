import React, { useState } from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import { useComponentLayout, useInView } from "../../hooks";
import { mix } from "react-native-redash";
import { Spacing } from "../styles";

const FACTOR = 1.2;
export interface CardImageProps {
  source: ImageSourcePropType;
  height: number;
  width: number;
}

const CardImage = ({ source, height, width }) => {
  const { layout, onLayout } = useComponentLayout();
  const { inViewProgress, viewProgress, restProgress } = useInView();
  const aspectRatio = height / width;

  const factorizeInViewProcess = useDerivedValue(() => {
    if (inViewProgress.value * FACTOR <= 1) {
      return inViewProgress.value * FACTOR;
    } else {
      return 1;
    }
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: mix(inViewProgress.value, -layout.width, 0) },
      {
        scale: mix(restProgress.value, 1, 1.2),
      },
    ],
  }));

  return (
    <View style={style.container} onLayout={onLayout}>
      <Animated.Image
        source={source}
        resizeMode="cover"
        style={[
          {
            width: layout.width,
            height: layout.width * aspectRatio,
          },
          animatedStyle,
        ]}
      />
    </View>
  );
};

export default CardImage;

const style = StyleSheet.create({
  container: {
    borderTopLeftRadius: Spacing.l,
    borderTopRightRadius: Spacing.l,
    overflow: "hidden",
  },
});

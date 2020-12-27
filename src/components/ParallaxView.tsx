import React, { ReactNode } from "react";
import { ViewProps } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from "react-native-reanimated";
import { useComponentLayout, useParallax } from "../hooks";

const IN_VIEW_TRHESHOLD = 100;

interface ParallaxViewProps extends ViewProps {
  children: ReactNode;
}

const ParallaxView = ({ children, style, ...props }: ParallaxViewProps) => {
  const { layout, onLayout } = useComponentLayout();
  const { scrollY, scrollLayout } = useParallax();

  const inView = useDerivedValue(
    () =>
      scrollY.value + IN_VIEW_TRHESHOLD <= layout.y + layout.height &&
      scrollLayout.height + scrollY.value >= layout.y + IN_VIEW_TRHESHOLD
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withSpring(inView.value ? 1 : 1.3),
      },
    ],
  }));

  return (
    <Animated.View
      onLayout={onLayout}
      style={[style, animatedStyle]}
      {...props}
    >
      {children}
    </Animated.View>
  );
};

export default ParallaxView;

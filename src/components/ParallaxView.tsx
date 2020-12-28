import React, { ReactNode } from "react";
import { ViewProps } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useComponentLayout, useParallax } from "../hooks";
import { toDeg, toRad } from "react-native-redash";

const IN_VIEW_TRHESHOLD = 50;

export interface ParallaxViewConfigProps {
  onlyOnce?: boolean;
}

interface ParallaxViewProps extends ViewProps {
  children: ReactNode;
  transition?: {
    scale?: number;
    translateY?: number;
    rotate?: number;
  };
  //config?: ParallaxViewConfigProps;
}

const ParallaxView = ({
  children,
  style,
  transition,
  ...props
}: ParallaxViewProps) => {
  const { layout, onLayout } = useComponentLayout();
  const wasInView = useSharedValue(false);
  const { scrollY, scrollLayout, config } = useParallax();

  const inView = useDerivedValue(() => {
    const currentlyInView =
      scrollY.value + IN_VIEW_TRHESHOLD <= layout.y + layout.height &&
      scrollLayout.height + scrollY.value >= layout.y + IN_VIEW_TRHESHOLD;
    if (!wasInView.value && currentlyInView && config.onlyOnce) {
      wasInView.value = true;
    }
    return currentlyInView;
  });

  const shouldBeActive = useDerivedValue(() => {
    if (inView.value) {
      return inView.value;
    } else {
      return wasInView.value && config?.onlyOnce;
    }
  });

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withSpring(shouldBeActive.value ? 1 : 0),
    transform: [
      {
        scale: withSpring(shouldBeActive.value ? 1 : 0),
      },
      // {
      //   translateX: withSpring(inView.value ? 0 : 200),
      // },
      {
        rotate: withSpring(shouldBeActive.value ? 0 : -1),
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

ParallaxView.defaultProps = {
  transition: {
    scale: 1,
    translateY: 0,
    rotate: 0,
  },
};

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
  transition?: {
    scale?: number;
    translateY?: number;
    rotate?: number;
    opacity?: number;
  };
  initial?: {
    scale?: number;
    translateY?: number;
    rotate?: number;
    opacity?: number;
  };
}

interface ParallaxViewProps extends ViewProps {
  children: ReactNode;
  config?: ParallaxViewConfigProps;
}

const ParallaxView = ({
  children,
  style,
  config,
  ...props
}: ParallaxViewProps) => {
  const { layout, onLayout } = useComponentLayout();
  const wasInView = useSharedValue(false);
  const { scrollY, scrollLayout, parallaxConfig } = useParallax();

  const inView = useDerivedValue(() => {
    const currentlyInView =
      scrollY.value + IN_VIEW_TRHESHOLD <= layout.y + layout.height &&
      scrollLayout.height + scrollY.value >= layout.y + IN_VIEW_TRHESHOLD;
    if (!wasInView.value && currentlyInView && config?.onlyOnce) {
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

  const scale = useDerivedValue(() => {
    const initial =
      config?.initial?.scale || config?.initial?.scale === 0
        ? config.initial.scale
        : parallaxConfig?.initial?.scale || defaultConfig.initial.scale;
    const transition =
      config?.transition?.scale || config?.transition?.scale === 0
        ? config.transition.scale
        : parallaxConfig?.transition?.scale || defaultConfig.transition.scale;
    return withSpring(shouldBeActive.value ? transition : initial);
  });

  const rotate = useDerivedValue(() => {
    const initial =
      config?.initial?.rotate || config?.initial?.rotate === 0
        ? config.initial.rotate
        : parallaxConfig?.initial?.rotate || defaultConfig.initial.rotate;
    const transition =
      config?.transition?.rotate || config?.transition?.rotate === 0
        ? config.transition.rotate
        : parallaxConfig?.transition?.rotate || defaultConfig.transition.rotate;
    return withSpring(shouldBeActive.value ? transition : initial);
  });

  const opacity = useDerivedValue(() => {
    const initial =
      config?.initial?.opacity || config?.initial?.opacity === 0
        ? config.initial.opacity
        : parallaxConfig?.initial?.opacity || defaultConfig.initial.opacity;
    const transition =
      config?.transition?.opacity || config?.transition?.opacity === 0
        ? config.transition.opacity
        : parallaxConfig?.transition?.opacity ||
          defaultConfig.transition.opacity;
    return withSpring(shouldBeActive.value ? transition : initial);
  });

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }, { rotate: rotate.value }],
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

const defaultConfig = {
  transition: {
    scale: 1,
    translateY: 0,
    rotate: 0,
    opacity: 1,
  },
  initial: {
    scale: 1,
    translateY: 0,
    rotate: 0,
    opacity: 1,
  },
};

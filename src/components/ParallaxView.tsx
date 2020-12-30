import React, { ReactNode } from "react";
import { ViewProps } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
  interpolate,
  Extrapolate,
  withSequence,
} from "react-native-reanimated";
import { useComponentLayout, useParallax } from "../hooks";
import { InViewContext } from "../context";
import { workletValue } from "../worklets";

const IN_VIEW_TRHESHOLD = 50;

export interface ParallaxViewConfigProps {
  onlyOnce?: boolean;
  transition?: AnimationTransitionType;
  initial?: AnimationTransitionType;
  scroll?: {
    translateY?: number;
  };
}

export type AnimationTransitionType = {
  scale?: number;
  translateY?: number;
  rotate?: number;
  opacity?: number;
};

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

  const viewProgress = useDerivedValue(() => {
    if (inView) {
      return interpolate(
        scrollY.value + scrollLayout.height,
        [layout.y, layout.y + scrollLayout.height],
        [0, 1],
        Extrapolate.CLAMP
      );
    } else {
      return 0;
    }
  });

  const inViewProgress = useDerivedValue(() => {
    if (inView) {
      return interpolate(
        scrollY.value + scrollLayout.height,
        [layout.y, layout.y + layout.height],
        [0, 1],
        Extrapolate.CLAMP
      );
    } else {
      return 0;
    }
  });

  const restProgress = useDerivedValue(() => {
    if (inView) {
      return interpolate(
        scrollY.value + scrollLayout.height,
        [layout.y, layout.y + layout.height, layout.y + scrollLayout.height],
        [0, 0, 1],
        Extrapolate.CLAMP
      );
    } else {
      return 0;
    }
  });

  const shouldBeActive = useDerivedValue(() => {
    if (inView.value) {
      return inView.value;
    } else {
      return wasInView.value && config?.onlyOnce;
    }
  });

  const scale = useDerivedValue(() => {
    const { init, trans } = workletValue(parallaxConfig, config, "scale");
    return withSpring(shouldBeActive.value ? trans : init);
  });

  const rotate = useDerivedValue(() => {
    const { init, trans } = workletValue(parallaxConfig, config, "rotate");
    return withSpring(shouldBeActive.value ? trans : init);
  });

  const translateY = useDerivedValue(() => {
    const { init, trans } = workletValue(parallaxConfig, config, "translateY");
    return withSpring(shouldBeActive.value ? trans : init);
  });

  const opacity = useDerivedValue(() => {
    const { init, trans } = workletValue(parallaxConfig, config, "opacity");
    return withSpring(shouldBeActive.value ? trans : init);
  });

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      { scale: scale.value },
      { rotate: rotate.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <InViewContext.Provider
      value={{ inView, inViewProgress, viewProgress, restProgress }}
    >
      <Animated.View
        onLayout={onLayout}
        style={[style, animatedStyle]}
        {...props}
      >
        {children}
      </Animated.View>
    </InViewContext.Provider>
  );
};

export default ParallaxView;

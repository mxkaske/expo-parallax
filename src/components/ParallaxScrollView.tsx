import React, { createContext, ReactNode, useContext } from "react";
import { ScrollViewProps } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { ParallaxContext } from "../context";
import { useComponentLayout } from "../hooks";

interface ParallaxScrollViewProps extends ScrollViewProps {
  children: ReactNode;
}
const ParallaxScrollView = ({
  children,
  ...props
}: ParallaxScrollViewProps) => {
  const { layout, onLayout } = useComponentLayout();
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      //console.log(e);
      scrollY.value = e.contentOffset.y;
    },
  });
  return (
    <ParallaxContext.Provider value={{ scrollY, scrollLayout: layout }}>
      <Animated.ScrollView
        onLayout={onLayout}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        {...props}
      >
        {children}
      </Animated.ScrollView>
    </ParallaxContext.Provider>
  );
};

export default ParallaxScrollView;

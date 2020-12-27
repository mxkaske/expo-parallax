import { createContext } from "react";
import { LayoutRectangle } from "react-native";
import Animated from "react-native-reanimated";

interface ParallaxContexProps {
  scrollY: Animated.SharedValue<number> | undefined;
  scrollLayout: LayoutRectangle;
}

const ParallaxContext = createContext<ParallaxContexProps>({
  scrollY: undefined,
  scrollLayout: {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  },
});

export default ParallaxContext;

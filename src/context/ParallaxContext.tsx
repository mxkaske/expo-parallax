import { createContext } from "react";
import { LayoutRectangle } from "react-native";
import Animated from "react-native-reanimated";
import { ParallaxViewConfigProps } from "../components";

interface ParallaxContexProps {
  scrollY: Animated.SharedValue<number> | undefined;
  scrollLayout: LayoutRectangle;
  config?: ParallaxViewConfigProps;
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

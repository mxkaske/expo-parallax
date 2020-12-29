import { createContext } from "react";
import { LayoutRectangle } from "react-native";
import Animated from "react-native-reanimated";
import { ParallaxViewConfigProps } from "../components";

interface ParallaxContextProps {
  scrollY: Animated.SharedValue<number> | undefined;
  scrollLayout: LayoutRectangle;
  parallaxConfig: ParallaxViewConfigProps;
}

const ParallaxContext = createContext<ParallaxContextProps>({
  scrollY: undefined,
  scrollLayout: {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  },
  parallaxConfig: {},
});

export default ParallaxContext;

import { createContext } from "react";
import Animated from "react-native-reanimated";

interface InViewContextProps {
  inView: Animated.SharedValue<boolean> | undefined;
  inViewProgress: Animated.SharedValue<number> | undefined;
  viewProgress: Animated.SharedValue<number> | undefined;
  restProgress: Animated.SharedValue<number> | undefined;
}

const InViewContext = createContext<InViewContextProps>({
  inView: undefined,
  inViewProgress: undefined,
  viewProgress: undefined,
  restProgress: undefined,
});

export default InViewContext;

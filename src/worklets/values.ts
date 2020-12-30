import {
  ParallaxViewConfigProps,
  AnimationTransitionType,
} from "../components/ParallaxView";

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
  scroll: {
    translateY: 0,
  },
};

export const workletValue = (
  globalConfig: ParallaxViewConfigProps,
  config: ParallaxViewConfigProps,
  type: keyof AnimationTransitionType
) => {
  "worklet";
  const initial =
    config?.initial[type] || config?.initial[type] === 0
      ? config.initial[type]
      : globalConfig?.initial[type] || defaultConfig.initial[type];
  const transition =
    config?.transition[type] || config?.transition[type] === 0
      ? config.transition[type]
      : globalConfig?.transition[type] || defaultConfig.transition[type];
  return { init: initial, trans: transition };
};

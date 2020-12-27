import { useState, useCallback } from "react";
import { LayoutChangeEvent, LayoutRectangle } from "react-native";

const useComponentLayout = () => {
  const [layout, setLayout] = useState<LayoutRectangle>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const layout = event.nativeEvent.layout;
    setLayout(layout);
  }, []);

  return { layout, onLayout };
};

export default useComponentLayout;

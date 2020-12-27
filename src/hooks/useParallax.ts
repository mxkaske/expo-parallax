import { useContext } from "react";
import { ParallaxContext } from "../context";

const useParallax = () => {
  const context = useContext(ParallaxContext);
  if (!context) {
    throw new Error("Violating rule of compound component");
  }
  return context;
};

export default useParallax;

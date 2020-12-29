import { useContext } from "react";
import { InViewContext } from "../context";

const useInView = () => {
  const context = useContext(InViewContext);
  if (!context) {
    throw new Error("Violating rule of compound component");
  }
  return context;
};

export default useInView;

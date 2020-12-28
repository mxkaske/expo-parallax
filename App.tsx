import React from "react";
import { AppNavigator } from "./src/example/navigation";
import { enableScreens } from "react-native-screens";
enableScreens();

export default function App() {
  return <AppNavigator />;
}

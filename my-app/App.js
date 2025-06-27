import React, { useState, useEffect } from "react";
import { View, StatusBar } from "react-native";
import SplashScreen from "./src/screens/SplashScreen";
import HomeScreen from "./src/screens/HomeScreen"; // corregido nombre

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      {isLoading ? <SplashScreen /> : <HomeScreen />}
    </View>
  );
}

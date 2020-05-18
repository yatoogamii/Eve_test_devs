// react
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

export const FadeIn = ({ children, duration = 1000, delay = 0 }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        useNativeDriver: true,
        toValue: 1,
        duration,
        delay
      }
    ).start();
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      {children}
    </Animated.View>
  )
}
import React from 'react';
import { Animated, PanResponder } from 'react-native';

export const MoveOnX = ({ children }) => {
  const pan = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,

    onPanResponderGrant: () => {
      pan.setOffset({
        x: pan.x._value,
        y: 0
      });
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x,
        dy: 0,
      },
    ], { useNativeDriver: false }),
    onPanResponderRelease: () => {
      Animated.spring(
        pan,
        { toValue: { x: 0, y: 0 }, useNativeDriver: false }
      ).start();
    }
  })

  const handles = panResponder.panHandlers;

  return (
    <Animated.View style={[pan.getLayout()]} {...handles}>
      {children}
    </Animated.View>
  )
};
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View } from "react-native";

// styles
import styled from 'styled-components/native';

//@TODO move any
export const LinearGradientAbstract = ({ colors, axis, locations }: any) => {
  return (<>
    <LinearGradientContainer axis={axis}>
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} locations={locations} colors={colors} style={styles.linearGradient} />
    </LinearGradientContainer>
  </>)
}

const LinearGradientContainer = styled.View<any>`
  position: absolute;
  top: ${({ axis }) => axis.y || 0}px;
  left: ${({ axis }) => axis.x || 0}px;
`

const styles = StyleSheet.create({
  linearGradient: {
    position: 'relative',
    width: 452,
    height: 98,
    padding: 50,
    zIndex: 0,
    transform: [{ rotate: "-47deg" }],
    borderRadius: 50,
  }
})
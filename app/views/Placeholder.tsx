import React from 'react';
import { View, Text } from "react-native"

export const Placeholder = ({ title }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#1B1B1B", alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: "white", fontSize: 40 }}>{title}</Text>
    </View>
  )
}
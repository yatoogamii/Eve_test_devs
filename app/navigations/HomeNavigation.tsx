// react
import React from 'react';
// navigation
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
// views
import { Home } from './../views/Home';
import { Placeholder } from '../views/Placeholder';

const Stack = createStackNavigator();

export const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Calendar" options={{
        title: 'Calendar',
        ...transition("horizontal-inverted")
      }} >
        {() => <Placeholder title="Calendar" />}
      </Stack.Screen>
      <Stack.Screen name="Home" component={Home} options={{
        title: 'Home',
      }} />
      <Stack.Screen name="Messages" options={{
        title: 'Messages',
        ...transition("horizontal")
      }}>
        {() => <Placeholder title="Messages" />}
      </Stack.Screen>

    </Stack.Navigator>
  )
}

const transition = (direction: string) => {
  return {
    gestureEnabled: true,
    gestureDirection: direction,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
  }
}
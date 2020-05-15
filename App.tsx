import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, TouchableHighlight, Text, View } from 'react-native';
// React navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Views
import { Home } from "./app/views/Home";
// Components
import { ImageAbstract } from './app/components/abstracts/ImageAbstract';
// Styles
import styled from 'styled-components';

const Tab = createBottomTabNavigator();

const App = () => {
  // if user is logged
  return (
    <>
      <MainNavigation />
    </>
  );

  // else log in navigation
};

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <MainTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Home} />
        <Tab.Screen name="Create" component={Home} />
        <Tab.Screen name="Profile" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const MainTabBar = ({ state, descriptors, navigation }: any) => {
  const iconsUri: any = {
    Home: "https://firebasestorage.googleapis.com/v0/b/eve-test-devs.appspot.com/o/global%2Ficon-home.png?alt=media&token=3c96ed76-76ea-4929-a5cf-70d2b6c702e1",
    Search: "https://firebasestorage.googleapis.com/v0/b/eve-test-devs.appspot.com/o/global%2Ficon-search.png?alt=media&token=21133187-171c-4bfd-abbf-01f9514915fe",
    Create: "https://firebasestorage.googleapis.com/v0/b/eve-test-devs.appspot.com/o/global%2Ficon-add.png?alt=media&token=9f0ac15d-5ae9-4f3d-8581-ea82cb06857d",
    Profile: "https://firebasestorage.googleapis.com/v0/b/eve-test-devs.appspot.com/o/global%2Ficon-profile.png?alt=media&token=07765277-27ec-4d93-97a5-ade38ae503bb"
  }
  return (
    <MainTabBarContainer>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const iconUri = iconsUri[route.name]
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <MainTabBarIconContainer
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            active={isFocused}
            key={index}
          >
            <ImageAbstract uri={iconUri} />
          </MainTabBarIconContainer>

        )
      })}
    </MainTabBarContainer>

  )
}

const MainTabBarContainer = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  padding: 0 2px;
  width: 100%;
  height: 92px;
  bottom: 0;
  background-color: white;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
`
const MainTabBarIconContainer = styled.TouchableOpacity`
  borderBottomWidth: 2px; 
  borderBottomColor: ${props => props.active ? '#00FF88' : 'white'}; 
  paddingBottom: 30px; 
  width: 40px;
  alignItems: center;
`

export default App;

import React from 'react';
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigation } from './HomeNavigation';
// views
import { Home } from "./../views/Home";
import { Placeholder } from "./../views/Placeholder";
// components
import { ImageAbstract } from "./../components/abstracts/ImageAbstract";
// styles
import { MainTabBarContainer, MainTabBarIconContainer } from "./../styles/navigations/MainNavigationStyles";


const Tab = createBottomTabNavigator();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <MainTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeNavigation} />
        <Tab.Screen name="Search" >
          {() => <Placeholder title="Search" />}
        </Tab.Screen>
        <Tab.Screen name="Create"  >
          {() => <Placeholder title="Create" />}
        </Tab.Screen>
        <Tab.Screen name="Profile" >
          {() => <Placeholder title="Profile" />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const MainTabBar = ({ state, descriptors, navigation }: any) => {
  const iconsUri: any = {
    Home: require('./../assets/images/icon-home.png'),
    Search: require('./../assets/images/icon-search.png'),
    Create: require('./../assets/images/icon-create.png'),
    Profile: require('./../assets/images/icon-profile.png')
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
            <ImageAbstract source={iconUri} />
          </MainTabBarIconContainer>

        )
      })}
    </MainTabBarContainer>

  )
}
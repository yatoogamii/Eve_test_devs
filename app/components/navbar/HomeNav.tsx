import React from 'react';
import { View, TouchableOpacity } from "react-native"
// navigation
import { useNavigation } from '@react-navigation/native';
// components
import { ImageAbstract } from '../abstracts/ImageAbstract';
// styles
import { HomeNavContainer } from "./../../styles/navbar/HomeNavStyles";

export const HomeNav = () => {
  const navigation = useNavigation();
  return (
    <HomeNavContainer>
      <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
        <ImageAbstract mTop="35" width="24" height="24" source={require('./../../assets/images/icon-calendar.png')} />
      </TouchableOpacity>

      <ImageAbstract width="71" height="77" source={require('./../../assets/images/eve-logo.png')} />

      <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
        <ImageAbstract mTop="35" width="24" height="24" source={require('./../../assets/images/icon-message-circle.png')} />
      </TouchableOpacity>
    </HomeNavContainer>
  )
}
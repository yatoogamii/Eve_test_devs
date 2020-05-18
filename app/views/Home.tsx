import React from 'react';
import { StatusBar } from 'react-native';
// components
import { LinearGradientAbstract } from "./../components/abstracts/LinearGradientAbstract";
import { HomeNav } from './../components/navbar/HomeNav';
import { EventsList } from './../components/events/EventsList';
// styles
import { HomeContainer } from '../styles/views/HomeStyles';

export const Home = () => {
    return (
        <HomeContainer>
            <Gradients />
            <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
            <HomeNav />
            <EventsList />
        </HomeContainer>
    )
};

const Gradients = () => {
    return (
        <>
            <LinearGradientAbstract colors={["#8F00FF", "#00FFDA"]} locations={[0, 0.3]} axis={{ x: -25, y: -175 }} />
            <LinearGradientAbstract colors={["#FFD300", "#FF00DB"]} locations={[0.1, 1]} axis={{ x: 110, y: 70 }} />
            <LinearGradientAbstract colors={["#FFD300", "#FF00DB"]} locations={[0.1, 1]} axis={{ x: 260, y: 110 }} />
            <LinearGradientAbstract colors={["#8F00FF", "#00FFDA"]} locations={[0.5, 1]} axis={{ x: -200, y: 600 }} />
        </>
    )
}
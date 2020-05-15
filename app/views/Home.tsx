import React, { useEffect, useState, useRef } from 'react';
import { Text, View, useWindowDimensions, StatusBar, ImageBackground } from 'react-native';
// interfaces
import { IEvent, IEvents, ITodos } from "../interfaces/events/IEvent";
// tools
import { sortAndGroupEventsAndTodosByDate } from "./../tools/sortAndGroupEventsAndTodosByDate";
// firebase
import firestore from '@react-native-firebase/firestore';
// components
import { EventCard } from "./../components/events/EventCard";
import { TodoCard } from './../components/events/TodoCard';
import { LinearGradientAbstract } from "./../components/abstracts/LinearGradientAbstract";

export const Home = () => {
    const [allEvents, setAllEvents] = useState<IEvents & ITodos | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const allEvents: any = [];

            const response = await firestore().collection('events').get();

            response.forEach((events) => {
                allEvents.push(events.data());
            });

            setAllEvents(await sortAndGroupEventsAndTodosByDate(allEvents));
        } catch (error) {
            console.error(error);
        }
    };

    // testing EventCard
    // @TODO loop into allEvents object and for each days show EventCard
    if (allEvents !== null) {
        return (
            <>
                <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
                <View style={{ flex: 1, backgroundColor: "#1B1B1B", paddingTop: 50, zIndex: 2 }}>
                    <LinearGradientAbstract colors={["#8F00FF", "#00FFDA"]} locations={[0.1, 0.4]} axis={{ x: -25, y: -140 }} />
                    <LinearGradientAbstract colors={["#FFD300", "#FF00DB"]} locations={[0.1, 1]} axis={{ x: 110, y: 70 }} />
                    <LinearGradientAbstract colors={["#FFD300", "#FF00DB"]} locations={[0.1, 1]} axis={{ x: 260, y: 110 }} />
                    <LinearGradientAbstract colors={["#8F00FF", "#00FFDA"]} locations={[0.5, 1]} axis={{ x: -200, y: 600 }} />

                    <TodoCard {...(allEvents!["15_05_2020"][0])} />
                    <EventCard {...(allEvents!["15_05_2020"][1])} />
                </View>
            </>
        )
    } else {
        return <Text>Aucun événement</Text>
    }

};

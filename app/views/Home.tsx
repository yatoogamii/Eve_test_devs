import React, { useEffect, useState } from 'react';
import { Text, View, useWindowDimensions, StatusBar } from 'react-native';

// interfaces
import { IEvent, IEvents } from "../interfaces/events/IEvent";

// tools
import { sortAndGroupEventsAndTodosByDate } from "./../tools/sortAndGroupEventsAndTodosByDate";

// firebase
import firestore from '@react-native-firebase/firestore';

// components
import { EventCard } from "../components/events/EventCard";

export const Home = () => {
    const [allEvents, setAllEvents] = useState<IEvents | null>(null);

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

                <View style={{ flex: 1, backgroundColor: "#1B1B1B", paddingTop: 50 }}>
                    <EventCard {...(allEvents!["15_05_2020"][1])} />
                </View>
            </>
        )
    } else {
        return <Text>Aucun événement</Text>
    }
};

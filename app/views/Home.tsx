import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

// interfaces
import { IEvent, IEvents } from "./../interfaces/IEvent";

// tools
import { sortAndGroupEventsByDate } from "./../tools/sortAndGroupEventsByDate";

// firebase
import firestore from '@react-native-firebase/firestore';


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

            setAllEvents(await sortAndGroupEventsByDate(allEvents));
        } catch (error) {
            console.error(error);
        }
    };

    return <Text>Hello world</Text>;
};

// react
import React, { useState, useEffect } from 'react';
import { SectionList, useWindowDimensions } from 'react-native';
// momentjs
import moment from 'moment';
// firebase
import firestore from '@react-native-firebase/firestore';
// interfaces
import { IEvent } from './../../interfaces/events/IEvent';
import { ITodo } from './../../interfaces/events/ITodo';
import { IEventsListTitle, IEventsListItem, IEventsListAllEvents } from './../../interfaces/events/IEventsList';

// tools
import { sortAndGroupEventsAndTodosByDate } from './../../tools/sortAndGroupEventsAndTodosByDate';
import { capitalize } from './../../tools/capitalize';
// components
import { TodoCard } from './TodoCard';
import { EventCard } from './EventCard';
// styles 
import { TextCustom } from './../../styles/helpers/TypoStyles';
import { EventsListTitleContainer, EventsListContainer } from './../../styles/events/EventsList';
import { FadeIn } from './../../styles/animations/FadeIn';

export const EventsList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [allEvents, setAllEvents] = useState<IEventsListAllEvents | null>(null);
  const windowHeight = useWindowDimensions().height;

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

      const objectOfAllEvents = await sortAndGroupEventsAndTodosByDate(allEvents);

      const formatedArrayOfAllEvents = Object.entries(objectOfAllEvents!).sort((a, b) => a[0].localeCompare(b[0])).map((value) => {
        return {
          title: value[0],
          data: value[1]
        }
      })

      setAllEvents(formatedArrayOfAllEvents);
    } catch (error) {
      console.error(error);
    }
  };

  const updateTodo = (todoId: string) => {
    const newAllEvents = [...allEvents].map((events) => {
      return {
        title: events.title,
        data: events.data.filter((eventOrTodo) => eventOrTodo?.todoId !== todoId),
      }
    });

    setAllEvents(newAllEvents);

  };


  if (allEvents !== null) {

    return (
      <>
        <EventsListContainer height={windowHeight}>
          <SectionList
            sections={allEvents}
            keyExtractor={(item, index) => item.name + index}
            stickySectionHeadersEnabled={false}
            renderSectionHeader={(props) => <Title title={props.section.title} allEvents={allEvents} />}
            renderItem={(props) => <Item cardIndex={props.index} title={props.section.title} item={props.item} allEvents={allEvents} updateTodo={updateTodo} />}
            refreshing={refreshing}
            onRefresh={() => fetchData()}
            extraData={allEvents}
          />
        </EventsListContainer>
      </>
    )
  } else {
    return <></>
  }

};

const Title = ({ title, allEvents }: IEventsListTitle) => {
  const index = allEvents.map((e) => { return e.title; }).indexOf(title);

  return (
    <FadeIn duration={1000} delay={index * 25}>
      <EventsListTitleContainer>
        <TextCustom size="25" weight="Light">{capitalize(moment(title, "DD_MM_YYY").format("dddd D MMMM"))}</TextCustom>
      </EventsListTitleContainer>
    </FadeIn>
  )
}

const Item = ({ cardIndex, item, title, allEvents, updateTodo }: IEventsListItem) => {
  const index = allEvents.map((e) => { return e.title; }).indexOf(title) + cardIndex + 1;
  return (
    <FadeIn duration={1000} delay={index * 50}>
      {"eventId" in item ? <EventCard {...item} /> : <TodoCard {...item} updateTodo={updateTodo} />}
    </FadeIn>
  )
}


// lodash
import groupBy from 'lodash/groupBy';

// interfaces
import {IEvent, IEvents} from '../interfaces/IEvent';

export const sortAndGroupEventsByDate = (events: IEvent[]): IEvents => {
  return groupBy(events, getDate);
};

const getDate = (event: IEvent) => {
  return `${new Date(event.startAt * 1000).getDate()}_${new Date(
    event.startAt * 1000,
  ).getMonth()}_${new Date(event.startAt * 1000).getFullYear()}`;
};

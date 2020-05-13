// lodash
import groupBy from 'lodash/groupBy';
import cloneDeep from 'lodash/cloneDeep';

// momentjs
import moment from 'moment';

// interfaces
import {IEvent, IEvents} from '../interfaces/IEvent';

export const sortAndGroupEventsByDate = (events: IEvent[]): IEvents =>
  formatUnixTimestamps(groupBy(events, getDate));

const getDate = (event: IEvent) => {
  return moment
    .unix(+event.startAt)
    .utc()
    .format('DD_MM_YYYY');
};

const formatUnixTimestamps = (eventsGroupByDate: IEvents) => {
  for (const date in eventsGroupByDate) {
    eventsGroupByDate[date].forEach((event: IEvent) => {
      event.startAt = moment
        .unix(+event.startAt)
        .utc()
        .format('HH : mm');
      event.endAt =
        event.endAt === null
          ? null
          : moment
              .unix(+event.endAt)
              .utc()
              .format('HH : mm');
    });
  }

  return eventsGroupByDate;
};

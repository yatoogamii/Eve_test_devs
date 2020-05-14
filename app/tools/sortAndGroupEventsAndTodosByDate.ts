// lodash
import groupBy from 'lodash/groupBy';
import cloneDeep from 'lodash/cloneDeep';

// momentjs
import moment from 'moment';

// interfaces
import {IEvent, IEvents, ITodo, ITodos} from '../interfaces/events/IEvent';

// tools
import {getDataByFirebaseRefs} from './getDataByFirebaseRefs';

export const sortAndGroupEventsAndTodosByDate = async (
  events: IEvent[],
): Promise<IEvents & ITodos> => {
  const allTodos = await getAllTodos(events);

  const allTodosAndEvents: Array<IEvent | ITodo> | any = [
    ...allTodos,
    ...events,
  ];

  return formatUnixTimestamps(groupBy(allTodosAndEvents, getDate));
};

const getAllTodos = async (events: IEvent[]) => {
  const allTodos = await Promise.all(
    cloneDeep(events).map(async (event) => {
      return await getDataByFirebaseRefs(event.todosRef);
    }),
  );

  return allTodos.flat();
};

const getDate = (eventOrTodo: IEvent | ITodo) => {
  return moment
    .unix(+eventOrTodo.startAt)
    .utc()
    .format('DD_MM_YYYY');
};

const formatUnixTimestamps = (eventsAndTodosGroupByDate: IEvents & ITodos) => {
  for (const date in eventsAndTodosGroupByDate) {
    eventsAndTodosGroupByDate[date].forEach((eventOrTodo: IEvent | ITodo) => {
      eventOrTodo.startAt = moment
        .unix(+eventOrTodo.startAt)
        .utc()
        .format('HH : mm');

      eventOrTodo.endAt =
        eventOrTodo.endAt === null
          ? null
          : moment
              .unix(+eventOrTodo.endAt)
              .utc()
              .format('HH : mm');
    });
  }

  return eventsAndTodosGroupByDate;
};

// lodash
import groupBy from 'lodash/groupBy';
import cloneDeep from 'lodash/cloneDeep';

// momentjs
import moment from 'moment';

// interfaces
import {IEvent, IEvents, ITodo, ITodos} from '../interfaces/IEvent';

export const sortAndGroupEventsAndTodosByDate = async (
  events: IEvent[],
): Promise<IEvents & ITodos> => {
  const allTodos: ITodo[] = await getTodos(events);
  const allTodosAndEvents: Array<IEvent | ITodo> | any = [
    ...allTodos,
    ...events,
  ];

  return formatUnixTimestamps(groupBy(allTodosAndEvents, getDate));
};

const getTodos = async (events: IEvent[]): Promise<ITodo[] | any[]> => {
  const todos = await Promise.all(
    cloneDeep(events).map(async (event: IEvent) => {
      return await Promise.all(
        event.todos.map(async (todoRef) => {
          const todoDoc = await todoRef.get();
          return todoDoc.data();
        }),
      );
    }),
  );

  return todos.flat();
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

import { IEvent } from "./IEvent";
import { ITodo } from "./ITodo";

export interface IEventsListAllEvents {
  title: string;
  data: IEvent[] & ITodo[] }[];
}
export interface IEventsListTitle {
  title: string; 
  allEvents: IEventsListAllEvents;
}

export interface IEventsListItem {
  cardIndex: number; 
  item: IEvent | ITodo;
  title: string; 
  allEvents: IEventsListAllEvents;
  updateTodo: any;
}
// firebase types
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export interface IEvent {
  eventId: string;
  icon: string;
  name: string;
  location: {
    city: string;
    place: string;
  };
  participants: FirebaseFirestoreTypes.DocumentReference[];
  needCar: boolean;
  startAt: number | string;
  endAt: number | string | null;
  createdBy: FirebaseFirestoreTypes.DocumentReference;
  todos: FirebaseFirestoreTypes.DocumentReference[];
}

export interface IEvents {
  [key: string]: IEvent[];
}

export interface ITodo {
  todoId: string;
  eventRef: FirebaseFirestoreTypes.DocumentReference;
  icon: string;
  name: string;
  personsAssigned: {
    finished: boolean;
    userRef: FirebaseFirestoreTypes.DocumentReference;
  }[];
}

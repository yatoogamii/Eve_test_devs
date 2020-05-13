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
  participantsRef: FirebaseFirestoreTypes.DocumentReference[];
  needCar: boolean;
  startAt: number | string;
  endAt: number | string | null;
  createdByRef: FirebaseFirestoreTypes.DocumentReference;
  todosRef: FirebaseFirestoreTypes.DocumentReference[];
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
  startAt: number | string;
  endAt: number | string | null;
}

export interface ITodos {
  [key: string]: ITodo[];
}

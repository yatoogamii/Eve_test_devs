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
  carpooling: boolean;
  startAt: number | string;
  endAt: number | string | null;
  createdByRef: FirebaseFirestoreTypes.DocumentReference;
  todosRef: FirebaseFirestoreTypes.DocumentReference[];
}

export interface IEvents {
  [key: string]: IEvent[];
}

// firebase types
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

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

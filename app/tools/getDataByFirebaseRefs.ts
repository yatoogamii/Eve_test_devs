import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {IEvent} from './../interfaces/events/IEvent';
import {ITodo} from './../interfaces/events/ITodo';

export const getDataByFirebaseRefs = async (
  refs?:
    | FirebaseFirestoreTypes.DocumentReference
    | FirebaseFirestoreTypes.DocumentReference[],
): Promise<any> => {
  try {
    if (!Array.isArray(refs)) {
      const document = await refs!.get();
      return document.data();
    } else {
      return await Promise.all(
        refs.map(async (ref) => {
          const document = await ref.get();
          return document.data();
        }),
      );
    }
  } catch (error) {
    console.error(error);
  }
};

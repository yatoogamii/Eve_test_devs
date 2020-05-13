import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {IEvent} from 'app/interfaces/IEvent';

export const getDataByFirebaseRefs = async (
  refs?:
    | FirebaseFirestoreTypes.DocumentReference
    | FirebaseFirestoreTypes.DocumentReference[],
): Promise<any> => {
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
};

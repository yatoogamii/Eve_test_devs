import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export const getDataByFirebaseRefs = async (
  refs?:
    | FirebaseFirestoreTypes.DocumentReference
    | FirebaseFirestoreTypes.DocumentReference[],
) => {
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

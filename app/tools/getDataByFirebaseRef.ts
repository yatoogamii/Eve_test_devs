import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export const getDataByFirebaseRef = async (
  ref: FirebaseFirestoreTypes.DocumentReference,
) => {
  const document = await ref.get();
  return document.data();
};

// const getTodos = async (events: IEvent[]): Promise<ITodo[] | any[]> => {
//   const todos = await Promise.all(
//     cloneDeep(events).map(async (event: IEvent) => {
//       return await Promise.all(
//         event.todos.map(async (todoRef) => {
//           const todoDoc = await todoRef.get();
//           return todoDoc.data();
//         }),
//       );
//     }),
//   );

//   return todos.flat();
// };

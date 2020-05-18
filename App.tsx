import 'react-native-gesture-handler';
import React from 'react';
// navigation
import { MainNavigation } from "./app/navigations/MainNavigation";
const App = () => {
  // if user is logged
  return (
    <>
      <MainNavigation />
    </>
  );
  // else log in navigation
};

export default App;

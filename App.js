import React from "react";
import { Provider } from "react-redux";

import firebase, { firebaseConfig } from "./services/firebase";
import AppComp from "./views/App";

import { store } from "./redux/store";

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <Provider store={store}>
      <AppComp />
    </Provider>
  );
}

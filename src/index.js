import React from 'react';
import { render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducers';
import App from './App';
import * as firebase from 'firebase';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDGzovNukZ2kUPEoi0jgJVyCIWdgsNrNuI",
  authDomain: "portfolio-f9c63.firebaseapp.com",
  databaseURL: "https://portfolio-f9c63.firebaseio.com",
  projectId: "portfolio-f9c63",
  storageBucket: "portfolio-f9c63.appspot.com",
  messagingSenderId: "1093142896722"
};
firebase.initializeApp(config);

let store = createStore(appReducer);

render((
  <Provider store={store}>
    <App />
  </Provider>
  ), document.getElementById('root'));
registerServiceWorker();

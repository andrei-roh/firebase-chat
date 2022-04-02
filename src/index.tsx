import ReactDOM from 'react-dom';
import { createContext } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import App from './App';
import './index.css';
import { IContext } from 'types';

firebase.initializeApp({
  apiKey: 'AIzaSyApMm51zMqWA6YzIDDNsQUlDyI0zIDinLs',
  authDomain: 'fir-chat-54137.firebaseapp.com',
  projectId: 'fir-chat-54137',
  storageBucket: 'fir-chat-54137.appspot.com',
  messagingSenderId: '388034995192',
  appId: '1:388034995192:web:a531310697c6366c4dec0d',
  measurementId: 'G-CYLR2C1JRB',
});

export const Context = createContext({} as IContext);

const authentication = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      authentication,
      firestore,
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

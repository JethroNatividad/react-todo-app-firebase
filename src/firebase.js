import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBlCNnmHhZXPQy0BpWN_SzTSI7LxrdsHnw',
  authDomain: 'todo-app-83f98.firebaseapp.com',
  databaseURL: 'https://todo-app-83f98.firebaseio.com',
  projectId: 'todo-app-83f98',
  storageBucket: 'todo-app-83f98.appspot.com',
  messagingSenderId: '703196875748',
  appId: '1:703196875748:web:2ea7337af3f3f1d6ae95f1',
  measurementId: 'G-HZPTSYYCYV',
});

export const db = firebaseApp.firestore();

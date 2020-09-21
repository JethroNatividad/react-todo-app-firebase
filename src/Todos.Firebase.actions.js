import { db } from './firebase';
import firebase from 'firebase';

export default (collection, action) => {
  switch (action.type) {
    case 'add':
      db.collection(collection).add({
        text: action.value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        completed: false,
      });
      break;
    case 'remove':
      db.collection(collection).doc(action.id).delete();
      break;
    case 'toggle':
      db.collection(collection).doc(action.id).set(
        {
          completed: !action.completed,
        },
        { merge: true }
      );
      break;
    case 'update':
      db.collection(collection).doc(action.id).set(
        {
          text: action.value,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
      break;
    default:
      console.log('nothing');
  }
};

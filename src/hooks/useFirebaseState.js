import { db } from '../firebase';
import { useState, useEffect } from 'react';

function useFirebaseState(collectionName, initialOrder) {
  const [todos, setTodos] = useState([]);
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    db.collection('todos')
      .orderBy('timestamp', order)
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            text: doc.data().text,
            id: doc.id,
            completed: doc.data().completed,
          }))
        );
      });
  }, [order]);

  const handleOrderChange = (evt) => {
    setOrder(evt.target.value);
  };
  return { todos, order, handleOrderChange };
}
export default useFirebaseState;

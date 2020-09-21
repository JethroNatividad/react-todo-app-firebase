import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import dispatch from './Todos.Firebase.actions';

function EditingTodoForm({ id, text, toggleEdit }) {
  const [value, handleTextChange] = useInputState(text);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch('todos', { type: 'update', id: id, value: value });
    toggleEdit();
  };
  return (
    <form style={{ marginLeft: '1rem', width: '70%' }} onSubmit={handleSubmit}>
      <TextField
        autoFocus
        value={value}
        onChange={handleTextChange}
        fullWidth
        type='text'
      />
    </form>
  );
}

export default EditingTodoForm;

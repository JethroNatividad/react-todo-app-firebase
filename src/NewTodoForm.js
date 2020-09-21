import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useInputState from './hooks/useInputState';
import dispatch from './Todos.Firebase.actions';

function NewTodoForm() {
  const [input, handleChange, reset] = useInputState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch('todos', { type: 'add', value: input });
    reset();
  };

  return (
    <Paper style={{ marginBottom: '1rem', padding: '0.5rem 1rem' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={input}
          onChange={handleChange}
          fullWidth
          label='Add new todo'
          type='text'
        />
      </form>
    </Paper>
  );
}

export default NewTodoForm;

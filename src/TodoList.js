import React from 'react';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

function TodoList({ todos }) {
  const noTodos = todos.length === 0;
  const mapTodos = () => {
    return todos.map((todo) => (
      <Todo
        text={todo.text}
        id={todo.id}
        key={todo.id}
        completed={todo.completed}
      />
    ));
  };
  if (noTodos) {
    return (
      <Grid
        container
        justify='center'
        alignItems='center'
        style={{ height: '30vh' }}
      >
        <Grid
          item
          style={{ color: '#777777', fontSize: '1.5rem', fontWeight: '300' }}
        >
          To get started, add a todo.
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Paper>
        <List>{mapTodos()}</List>
      </Paper>
    );
  }
}

export default TodoList;

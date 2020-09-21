import React from 'react';
import './App.css';
import TodoList from './TodoList';
import NewTodoForm from './NewTodoForm';
import {
  AppBar,
  Typography,
  Grid,
  Paper,
  Toolbar,
  Select,
  MenuItem,
} from '@material-ui/core';
import useFirebaseState from './hooks/useFirebaseState';
function App() {
  const { todos, order, handleOrderChange } = useFirebaseState('todos', 'desc');

  return (
    <div className='App'>
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: '100vh',
          backgroundColor: '#fafafa',
        }}
        elevation={0}
      >
        <AppBar color='primary' position='static' style={{ height: '64px' }}>
          <Toolbar>
            <Typography color='inherit'>TO-DO LIST</Typography>
            <Select
              value={order}
              onChange={handleOrderChange}
              style={{ marginLeft: 'auto', color: 'white' }}
            >
              <MenuItem value='desc'>Ascending</MenuItem>
              <MenuItem value='asc'>Descending</MenuItem>
            </Select>
          </Toolbar>
        </AppBar>
        <Grid container justify='center' style={{ marginTop: '1rem' }}>
          <Grid item xs={11} sm={8} md={6} lg={5}>
            <NewTodoForm />
            <TodoList todos={todos} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default App;

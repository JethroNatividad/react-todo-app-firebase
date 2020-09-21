import React, { memo } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import useToggleState from './hooks/useToggleState';
import EditingTodoForm from './EditingTodoForm';
import dispatch from './Todos.Firebase.actions';

function Todo({ text, id, completed }) {
  const [editing, toggleEditing] = useToggleState(false);
  return (
    <div
      style={{
        height: '64px',
      }}
    >
      <ListItem style={{ height: '64px' }}>
        {editing ? (
          <EditingTodoForm id={id} text={text} toggleEdit={toggleEditing} />
        ) : (
          <>
            <Checkbox
              checked={completed}
              onClick={() =>
                dispatch('todos', {
                  type: 'toggle',
                  id: id,
                  completed: completed,
                })
              }
            />
            <ListItemText>{text}</ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                aria-label='delete'
                onClick={() => dispatch('todos', { type: 'remove', id: id })}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label='edit' onClick={toggleEditing}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    </div>
  );
}

export default memo(Todo);

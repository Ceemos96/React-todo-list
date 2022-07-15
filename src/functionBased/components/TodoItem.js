/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

const completedStyle = {
  fontStyle: 'italic',
  color: '#595959',
  opacity: 0.4,
  textDecoration: 'line-through',
};

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => () => {
  }, []);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const { completed, id, title } = props.todo;
  return (
    <li className="item">
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          className="checkbox"
          type="checkbox"
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button type="button" onClick={() => props.deleteTodoProps(id)}>
          <FaTrash />
        </button>
        <span style={props.todo.completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input
        type="text"
        className="input-text-2"
        style={editMode}
        value={title}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
